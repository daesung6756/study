'use strict'

document.addEventListener("DOMContentLoaded", function(){

    //overlay nav
    const UI = {
        backtick : 192,
        html : document.querySelector('html'),
        body : document.body,
        loader : document.querySelector('#loader'),
        header : document.querySelector('#header'),
        overlayNavElements : document.querySelectorAll('[data-overlay]'),
        popupElements : document.querySelectorAll('[data-popup]'),
        toggleBoxElements : document.querySelectorAll('[data-toggle]'),
        overlayNavGroup: [],
        popupGroup : [],
        toggleBoxGroup: [],
        toggleBoxOpenGroup: [],
        isOpenEvent: null,
        isDimmed: false,
        scrollTopElement:'',
        init: function() {
            this.loaderClear();
            this.overlayNavElements.length > 0 ? this.overlayNav() : console.log('data-overlay length : 0');
            this.popupElements.length > 0 ? this.popups() : console.log('data-popup length : 0');
            this.toggleBoxElements.length > 0 ? this.toggleBox() : console.log('data-toggle length : 0');
            this.scrollTopView();
            this.scrollTopClickEvent();
        },
        loaderClear : function() {
            window.addEventListener('load', function () {
                setTimeout(function() {
                    this.loader.remove();
                }, 400)
            })
        },
        overlayNav : function () {
            for(let [index , value ] of this.overlayNavElements.entries()){
                this.overlayNavGroup.push(value.dataset.overlay)
            };
            this.overlayNavGroup.map( value => {
                const open = document.querySelector('[data-overlay-open=' + value +']');
                const close = document.querySelector('[data-overlay-close=' + value +']');

                open.addEventListener('click', () => this.useDimmedOpen( value,  'overlay', 'is-on' ));
                close.addEventListener('click',() => this.useDimmedClose( value , 'overlay', 'is-on' ));

                document.addEventListener('keydown', e => {
                    if(e.keyCode === this.backtick) {
                        if (this.isOpenEvent === null) {
                            this.useDimmedOpen( value,  'overlay', 'is-on' );
                        } else {
                            this.useDimmedClose( value , 'overlay', 'is-on' );
                        }
                    }
                });
            })
        },
        popups : function () {
            for(let [index , value ] of this.popupElements.entries()){
                this.popupGroup.push(value.dataset.popup);
            };

            this.popupGroup.map( value => {
                const open = document.querySelector('[data-popup-open=' + value + ']');
                const close = document.querySelector('[data-popup-close=' + value + ']');

                open.addEventListener('click', () => this.useDimmedOpen( value ,'popup', 'is-on'));
                close.addEventListener('click', () => this.useDimmedClose( value ,'popup', 'is-on'));
            });
        },
        toggleBox : function () {
            for(let [index , value ] of this.toggleBoxElements.entries()){
                this.toggleBoxGroup.push(value.dataset.toggle);
            };
            this.toggleBoxGroup.map( value => {
                const btn = document.querySelector('[data-toggle=' + value + ']');
                const box = document.querySelector('[data-toggle-box=' + value + ']');

                btn.addEventListener('click', () => {
                    this.toggleClass( btn , 'is-on');
                    this.toggleClass( box , 'is-show');
                });

            });
        },
        scrollTopView: function (){
            const scrollWrap = document.querySelector('.scroll-top-wrap');
            this.html.scrollTop > this.header.clientHeight ? scrollWrap.classList.add('is-on') : scrollWrap.classList.remove('is-on');
        },
        scrollTopClickEvent : function () {
            const button = document.querySelector('#scrollTopBtn');
            button.addEventListener('click', function(){
                window.scrollTo({top: 0, behavior: 'smooth'})
            })
        },
        dimmedCloseEvent : function() {
            const dimmed = document.querySelector('.dimmed');
            const currentEvent = document.querySelector(this.isOpenEvent)
            dimmed.addEventListener('click', () => {
                if(this.isOpenEvent){
                    if(currentEvent.classList.contains('is-on')){
                        currentEvent.classList.remove('is-on');
                        this.removeDimmed();
                        this.isOpenEvent = null;
                    }
                }
            });
        },
        useDimmedOpen : function ( value , dataName, className ) {
            this.activate('[data-' + dataName + '=' + value + ']',  className );
            this.addDimmed();
            this.isOpenEvent = '[data-' + dataName + '=' + value + ']';
            this.dimmedCloseEvent();
        },
        useDimmedClose : function ( value , dataName, className ) {
            this.inActivate('[data-' + dataName + '=' + value + ']',  className );
            this.removeDimmed();
            this.isOpenEvent = null;
        },
        activate: function ( data , className ) {
            const targetEl = document.querySelector(data);
            targetEl.classList.add(className);

        },
        inActivate: function ( data, className ) {
            const targetEl = document.querySelector(data);
            targetEl.classList.remove(className);

        },
        toggleClass : function ( el, className ) {
            el.classList.toggle( className );
        },
        addDimmed : function (){
            const div = document.createElement('div');
            this.body.classList.add('is-fixed');
            div.classList.add('dimmed');
            this.body.append(div);
            this.isDimmed = true;
        },
        removeDimmed : function () {
            this.body.classList.remove('is-fixed');
            this.body.querySelector('.dimmed').remove();
            this.isDimmed = false;
        }
    }

    UI.init();

    document.addEventListener('scroll', function(){
        UI.scrollTopView();
    });
});

window.addEventListener('load', function () {
    console.log('window load : END')
});







