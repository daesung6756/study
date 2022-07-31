'use strict'

const include = {
    head : {
        title : function(tit){
            document.write('<title>' + tit + '</title>');
        },
        meta :function () {
            document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
            document.write('<meta name="Author" content="daesung lee">');
        },
        styles : {
            common : function () {
                document.write('<link rel="stylesheet" href="css/reset.css">');
                document.write('<link rel="stylesheet" href="css/common.css">');
                document.write('<link rel="stylesheet" href="css/layout.css">');
            },
        },
        scripts : {
            common : function () {
                document.write('<script type="text/javascript" src="js/vendor/babel.min.js"></script>');
                document.write('<script type="text/javascript" src="js/vendor/polyfill.min.js"></script>');
                document.write('<script src="js/common.js"></script>');
            },
        }
    },
    footer : {
        scripts :{
            _this : function () {
                document.write('<script src="js/this.js"></script>');
            }
        }
    },
    html : {
        loader : function () {
            var render =
                '<!-- LOADER : START -->'
                + '<div class="loading-bar" id="loader">'
                + '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">\n' + '<rect fill="#fff" width="3" height="100" transform="translate(0) rotate(180 3 50)">\n' + '  <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite"></animate>\n' + '</rect>\n' + '<rect x="17" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 20 50)">\n' + '  <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite" begin="0.1s"></animate>\n' + '</rect>\n' + '<rect x="40" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 40 50)">\n' + '  <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite" begin="0.3s"></animate>\n' + '</rect>\n' + '<rect x="60" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 58 50)">\n' + '  <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite" begin="0.5s"></animate>\n' + '</rect>\n' + '<rect x="80" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 76 50)">\n' + '  <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite" begin="0.1s"></animate>\n' + '</rect>\n' + '</svg>'
                + '</div>'
                +  '<!--//LOADER : END -->'
            return render;
        },
        overlayNav : function () {
            var render =
                '<!-- OVERLAY NAV : START -->'
                + '<nav id="overlayNav" class="overlay-nav-wrap" data-overlay="gnbNav">'
                + '<div class="inner">'
                + '<div class="nav-head">'
                + '<h2 class="title">Gnb</h2>'
                + '<button type="button" class="overlay-nav-close-btn" data-overlay-close="gnbNav" title="GNB NAV 닫기"><i class="icon icon-cross-white"><span class="blind">GNB 닫기</span></i></button>'
                + '</div>'
                + '<ul class="nav-body">'
                + '<li><div class="nav-group-title">Javascript<button type="button" class="toggle-btn type2" data-toggle="gnbListGroup1"></button></div>'
                + '<ul class="toggle-box" data-toggle-box="gnbListGroup1">'
                + '<li><a href="index.html">바닐라 자바스크립란?</a></li>'
                + '<li><a href="this.html">this의 개념</a></li>'
                + '<li><a href="function.html">자바스크립트 함수의 종류 및 정의</a></li>'
                + '<li><a href="built-in-function.html">자바스크림트 내장 함수</a></li>'
                + '<li><a href="array-prototype.html">Array (배열)</a></li>'
                + '</ul>'
                + '</li>'
                + '<li><div class="nav-group-title">Html<button type="button" class="toggle-btn type2" data-toggle="gnbListGroup2"></button></div>'
                + '<ul class="toggle-box" data-toggle-box="gnbListGroup2">'
                + '<li><a href="index.html">예제</a></li>'
                + '</ul>'
                + '</li>'
                + '<li><div class="nav-group-title">Css<button type="button" class="toggle-btn type2" data-toggle="gnbListGroup3"></button></div>'
                + '<ul class="toggle-box" data-toggle-box="gnbListGroup3">'
                + '<li><a href="index.html">예제</a></li>'
                + '</ul>'
                + '</li>'
                + '</ul>'
                + '</div>'
                + '</nav>'
                + '<!-- //OVERLAY NAV : END -->';

            return render;
        },
        header: function (){
            var render =
                '<!-- HEADER : START -->'
                + '<header id="header" class="header">'
                + '<div class="inner flex-wrap">'
                + '<div class="column">'
                + '<button type="button" id="overlayNavButton" class="overlay-nav-open-btn" data-overlay-open="gnbNav"><i class="icon icon-bugger-white"><span class="blind">GNB 열기</span></i></button>'
                + '</div>'
                + '<div class="column">'
                + '</div>'
                + '<div class="column">'
                + '</div>'
                + '</div>'
                + '</header>'
                + '<!-- //HEADER : END -->'

            return render;
        },
        footer: function () {
            var render =
                '<!-- FOOTER : START -->'
                + '<footer id="footer" class="footer">'
                + '<div class="inner">이곳은 푸터 입니다.</div>'
                + '</footer>'
                + '<!--//FOOTER : END -->';
            return render;
        },
        scrollTopMove : function () {
            var render =
                '<!-- SCROLL TOP : START -->'
                + '<div class="scroll-top-wrap">'
                + '<button type="button" id="scrollTopBtn" class="btn btn-round bg-success size-mid">위로 이동<i class="icon icon-circle-up-arrow-white"></i></button>'
                + '</div>'
                + '<!--//SCROLL TOP : END -->';
            return render;
        },
    }
}

function defaultRender() {
    const wrap = document.querySelector('.wrap');
    const main = document.querySelector('#app');
    const popups = document.querySelectorAll('[data-popup]');
    const renderPopupDomGroup = [];

    popups.forEach(function (value, key) {
        renderPopupDomGroup.push(value.dataset.popup);
    });

    const popupRender = renderPopupDomGroup.map(function( value ){
        const popup = document.querySelector('[data-popup=' + value + ']');
        const wrap = popup.parentNode;
        let output = '<!-- popup : START -->' + wrap.innerHTML + '<!--//popup : END -->';

        return output;
    }).join('');

    const render = {
        loader : include.html.loader(),
        overlayNav: include.html.overlayNav(),
        header: include.html.header(),
        main: '<!-- MAIN : START -->' + main.innerHTML + '<!-- MAIN : END -->',
        footer: include.html.footer(),
        scrollTopMove: include.html.scrollTopMove(),
        popups : popupRender
    }
    wrap.innerHTML =
        render.loader +
        render.header +
        render.main +
        render.footer +
        render.overlayNav +
        render.scrollTopMove +
        render.popups
}

document.addEventListener("DOMContentLoaded", function() {
    console.log('render : START')
    defaultRender();
    console.log('render : END')
});


