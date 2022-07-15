'use strict'

function defaultRender() {
    const wrap = document.querySelector('.wrap');
    const main = document.querySelector('#app');
    const render = {
        overlayNav: include.html.overlayNav(),
        header: include.html.header(),
        main: '<!-- MAIN : START -->' + main.innerHTML + '<!-- MAIN : END -->',
        footer: include.html.footer(),
        scrollTopMove: include.html.scrollTopMove()
    }
    wrap.innerHTML = render.overlayNav + render.header + render.main + render.footer + render.scrollTopMove;
}

document.addEventListener("DOMContentLoaded", function(){
    defaultRender();

    //overlay nav
    const UI = {
        html : document.querySelector('html'),
        body : document.body,
        header : document.querySelector('#header'),
        overlayNavElements : document.querySelectorAll('[data-overlay]'),
        overlayNavGroup: [],
        isOpenEvent: null,
        isDimmed: false,
        scrollTopElement:'',
        init: function() {
            this.overlayNavElements.length > 0 ? this.overlayNav() : console.log('data-overlay : none');
            this.scrollTopView();
            this.scrollTopClickEvent();
        },
        overlayNav : function () {
            for(let [index , value ] of this.overlayNavElements.entries()){
                this.overlayNavGroup.push(value.dataset.overlay)
            };
            this.overlayNavGroup.map( value => {
                const open = document.querySelector('[data-overlay-open=' + value +']');
                const close = document.querySelector('[data-overlay-close=' + value +']');
                open.addEventListener('click', () => {
                    this.activate('[data-overlay=' + value +']', 'is-on');
                    this.addDimmed();
                    this.isOpenEvent = '[data-overlay=' + value + ']';
                    this.dimmedCloseEvent();
                });
                close.addEventListener('click',() => {
                    this.inActivate('[data-overlay=' + value +']', 'is-on')
                    this.removeDimmed();
                    this.isOpenEvent = null;
                });
            })
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
        activate: function ( data , className ) {
            const targetEl = document.querySelector(data);
            targetEl.classList.add(className);

        },
        inActivate: function ( data, className ) {
            const targetEl = document.querySelector(data);
            targetEl.classList.remove(className);

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
    })
});


window.addEventListener('load', function () {
})






