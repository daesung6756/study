'use strict'

function defaultRender() {
    const overlayNav = document.getElementById('overlayNav');
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    const scrollTopMove = document.getElementById('scrollTopMove');

    overlayNav.innerHTML = include.html.overlayNav();
    header.innerHTML = include.html.header();
    footer.innerHTML = include.html.footer();
    scrollTopMove.innerHTML = include.html.scrollTopMove();
}

document.addEventListener("DOMContentLoaded", function(){
    defaultRender();

    //overlay nav
    const UI = {
        body : document.body,
        overlayNavElements : document.querySelectorAll('[data-overlay]'),
        overlayNavGroup: [],
        init: function() {
            this.overlayNavElements.length > 0 ? this.overlayNav() : console.log('data-overlay : none');
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
                });
                close.addEventListener('click',() => {
                    this.inActivate('[data-overlay=' + value +']', 'is-on')
                    this.removeDimmed();
                });
            })
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
            div.classList.add('dimmed');
            this.body.append(div);
        },
        removeDimmed : function () {
            this.body.querySelector('.dimmed').remove();
        }
    }

    UI.init();
});


window.addEventListener('load', function () {


})





