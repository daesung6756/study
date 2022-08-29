'use strict'


document.addEventListener("DOMContentLoaded", function(){

    const UI = {
        backtick : 192,
        html : document.querySelector('html'),
        body : document.body,
        loader : document.querySelector('#loader'),
        header : document.querySelector('#header'),
        count : document.querySelector('#descCount'),
        overlayNavElements : document.querySelectorAll('[data-overlay]'),
        popupElements : document.querySelectorAll('[data-popup]'),
        toggleBoxElements : document.querySelectorAll('[data-toggle]'),
        overlayNavGroup: [],
        popupGroup : [],
        toggleBoxGroup: [],
        toggleBoxOpenGroup: [],
        isOpenEvent: null,
        isDimmed: null,
        scrollTopElement:'',
        init: function() {
            this.loaderClear();
            this.overlayNavElements.length > 0 ? this.overlayNav() : console.log('data-overlay length : none');
            this.popupElements.length > 0 ? this.popups() : console.log('data-popup length : none');
            this.toggleBoxElements.length > 0 ? this.toggleBox() : console.log('data-toggle length : none');
            this.count ? this.descListCount() : false ;
            this.scrollSticky();
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
            }
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
            }

            this.popupGroup.map( value => {
                const open = document.querySelector('[data-popup-open=' + value + ']');
                const closeGroup = document.querySelectorAll('[data-popup-close=' + value + ']');

                for(let [index , element ] of closeGroup.entries()) {
                    element.addEventListener('click', () => this.useDimmedClose( value ,'popup', 'is-on'));
                }

                open.addEventListener('click', () => this.useDimmedOpen( value ,'popup', 'is-on'));

            });
        },
        toggleBox : function () {
            for(let [index , value ] of this.toggleBoxElements.entries()){
                this.toggleBoxGroup.push(value.dataset.toggle);
            }
            this.toggleBoxGroup.map( value => {
                const btn = document.querySelector('[data-toggle=' + value + ']');
                const box = document.querySelector('[data-toggle-box=' + value + ']');

                btn.addEventListener('click', () => {
                    this.toggleClass( btn , 'is-on');
                    this.toggleClass( box , 'is-show');
                });

            });
        },
        scrollSticky : function () {
            this.html.scrollTop > this.header.clientHeight ? this.header.classList.add('is-fixed') : this.header.classList.remove('is-fixed');
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
            const currentEvent = document.querySelector(this.isOpenEvent);
            this.isDimmed.addEventListener('click', () => {
                if(this.isOpenEvent){
                    if(currentEvent.classList.contains('is-on')){
                        currentEvent.classList.remove('is-on');
                        this.removeDimmed();
                        this.isOpenEvent = null;
                        this.isDimmed = null;
                    }
                }
            });
        },
        useDimmedOpen : function ( value , dataName, className ) {
            this.activate('[data-' + dataName + '=' + value + ']',  className );
            this.isOpenEvent = '[data-' + dataName + '=' + value + ']';
            if(dataName === 'popup'){
                this.addDimmed(this.isOpenEvent);
            } else {
                this.addDimmed();
            }
            this.dimmedCloseEvent();
        },
        useDimmedClose : function ( value , dataName, className ) {
            this.inActivate('[data-' + dataName + '=' + value + ']',  className );
            this.removeDimmed();
            this.isOpenEvent = null;
        },
        toggleClass : function ( el, className ) {
            el.classList.toggle( className );
        },
        activate: function ( data , className ) {
            const targetEl = document.querySelector(data);
            targetEl.classList.add(className);

        },
        inActivate: function ( data, className ) {
            const targetEl = document.querySelector(data);
            targetEl.classList.remove(className);

        },
        addDimmed : function ( element = this.body){
            const div = document.createElement('div');
            this.body.classList.add('is-fixed');
            div.classList.add('dimmed');
            if(element !== this.body){
                document.querySelector(element).append(div);
            } else {
                element.append(div);
            }
            this.isDimmed = div;
        },
        removeDimmed : function () {
            this.body.classList.remove('is-fixed');
            this.body.querySelector('.dimmed').remove();
            this.isDimmed = null;
        },
        descListCount : function () {
            const list = document.querySelector('#descList');
            const total = list.querySelectorAll('dt').length ;

            this.count.querySelector('.count').innerHTML = total + " 개";
        }
    }

    UI.init();

    document.addEventListener('scroll', function(){
        UI.scrollSticky();
        UI.scrollTopView();
    });
});

window.addEventListener('load', function () {
    console.log('window load : END')
});







