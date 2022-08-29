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
            swiper : function() {
                document.write('<link rel="stylesheet" href="css/vendor/swiper-bundle.min.css">');
            }
        },
        scripts : {
            common : function () {
                document.write('<script type="text/javascript" src="js/vendor/babel.min.js"></script>');
                document.write('<script type="text/javascript" src="js/vendor/polyfill.min.js"></script>');
                document.write('<script src="js/common.js"></script>');
            },
            swiper : function () {
                document.write('<script type="text/javascript" src="js/vendor/swiper-bundle.min.js"></script>');
            }
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
                + '<li><a href="index.html" target="_self">Home</a></li>'
                + '<li><div class="nav-group-title">Javascript<button type="button" class="toggle-btn type2" data-toggle="gnbListGroup1"></button></div>'
                + '<ul class="toggle-box" data-toggle-box="gnbListGroup1">'
                + '<li><a href="js-info.html">바닐라 자바스크립란?</a></li>'
                + '<li><a href="js-this.html">this의 개념</a></li>'
                + '<li><a href="js-function.html">함수의 종류 및 정의</a></li>'
                + '<li><a href="js-built-in-function.html">내장 함수</a></li>'
                + '<li><a href="js-array-prototype.html">Array (배열)</a></li>'
                + '<li><a href="https://demo.tutorialzine.com/2015/08/how-to-control-youtubes-video-player-with-javascript/" target="_blank">[작업 사례] 유튜브 플레이어 스크립트 제어</a></li>'
                + '</ul>'
                + '</li>'
                + '</li>'
                + '<li><div class="nav-group-title">ECMAscript2015(es6)<button type="button" class="toggle-btn type2" data-toggle="gnbListGroup2"></button></div>'
                + '<ul class="toggle-box" data-toggle-box="gnbListGroup2">'
                + '<li><a href="es6-info.html">ECMAscript란?</a></li>'
                + '<li><a href="es6-variable.html">const, let, var</a></li>'
                + '<li><a href="es6-template-literals.html">탬플릿 리터럴(template literals)</a></li>'
                + '</ul>'
                + '</li>'
                + '<li><div class="nav-group-title">HTML<button type="button" class="toggle-btn type2" data-toggle="gnbListGroup3"></button></div>'
                + '<ul class="toggle-box" data-toggle-box="gnbListGroup3">'
                + '<li><a href="index.html">예제</a></li>'
                + '</ul>'
                + '</li>'
                + '<li><div class="nav-group-title">CSS<button type="button" class="toggle-btn type2" data-toggle="gnbListGroup4"></button></div>'
                + '<ul class="toggle-box" data-toggle-box="gnbListGroup4">'
                + '<li><a href="css-info.html">CSS란?</a></li>'
                + '<li><a href="css-pseudo-class.html">CSS ::Pseudo-class</a></li>'
                + '<li><a href="css-property.html">CSS Property</a></li>'
                + '<li><a href="css-function.html">CSS Function</a></li>'
                + '<li><a href="css-rule.html">CSS @rule</a></li>'
                + '<li><a href="https://jigsaw.w3.org/css-validator/" target="_blank">CSS 유효성 검사</a></li>'
                + '</ul>'
                + '</li>'
                + '<li><div class="nav-group-title">NodeJS<button type="button" class="toggle-btn type2" data-toggle="gnbListGroup5"></button></div>'
                + '<ul class="toggle-box" data-toggle-box="gnbListGroup5">'
                + '<li><a href="node-info.html">NodeJS 정의 및 NPM 명령어 모음</a></li>'
                + '</ul>'
                + '</li>'
                + '</li>'
                + '<li><div class="nav-group-title">유용한 도구들<button type="button" class="toggle-btn type2" data-toggle="gnbListGroup6"></button></div>'
                + '<ul class="toggle-box" data-toggle-box="gnbListGroup6">'
                + '<li><a href="https://daesung6756.github.io/style-guide.io/" target="_blank">CSS guide template</a></li>'
                + '<li><a href="https://caniuse.com/?search=box-shadow" target="_blank">CSS support</a></li>'
                + '<li><a href="https://autoprefixer.github.io/" target="_blank">CSS Autoprefixer</a></li>'
                + '<li><a href="https://www.colorzilla.com/gradient-editor/" target="_blank">Gradient Generator</a></li>'
                + '<li><a href="https://loading.io/" target="_blank">Loader Generator</a></li>'
                + '<li><a href="https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=FF9100/" target="_blank">Color Toll Generator</a></li>'
                + '<li><a href="https://templates.mailchimp.com/resources/inline-css/" target="_blank">Inline 처리기 (edm 제작용)</a></li>'
                + '<li><a href="http://publishing.kr/vw/" target="_blank">단위 계산기 (vw,em,rem...)</a></li>'
                + '<li><a href="https://gs.statcounter.com/" target="_blank">해상도 점유율 체크 사이트</a></li>'
                + '<li><a href="https://gs.statcounter.com/" target="_blank"></a></li>'
                + '</ul>'
                + '</li>'
                + '</ul>'
                + '</div>'
                + '</nav>'
                + '<!-- //OVERLAY NAV : END -->';

            return render;
        },
        header: function ( title , src ){
            if(title === undefined){
                title = 'Home'
                src = 'index.html'
            }

            var render =
                '<!-- HEADER : START -->'
                + '<header id="header" class="header">'
                + '<div class="inner flex-wrap">'
                + '<div class="column">'
                + '<button type="button" id="overlayNavButton" class="overlay-nav-open-btn" data-overlay-open="gnbNav"><i class="icon icon-bugger-white"><span class="blind">GNB 열기</span></i></button>'
                + '</div>'
                + '<div class="column">'
                + '<h1><a href="index.html" class="title">Home</a></h1>'
                + '</div>'
                + '<div class="column">'
                + '<button type="button" data-popup-open="commonPopup1">공통 팝업 열기</button>'
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
                + '<div class="inner">'
                + '<p>Concentrix Services Korea Ltd <br>Digital-Design team </p>'
                + '<address>5th Fl., NC Tower I 509, Taeheran-ro, 06169 Gangnam-Gu Seoul Korea, Republic of</address>'
                + '<p>@copyright Leeds</p>'
                + '</div>'
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
        commonPopup : function () {
            var render =
                '<!-- popup : START -->'
                + '<div class="popup-wrap" data-popup="commonPopup1">'
                + '<div class="popup">'
                + '<div class="inner">'
                + '<div class="pop-head">'
                + '<div class="inner">'
                + '<h3 class="title">제목 입니다.</h3>'
                + '<button type="button" class="pop-head-close-btn" data-popup-close="commonPopup1"><i class="icon icon-cross-white"><span class="blind">popup 닫기</span></i></button>'
                + '</div>'
                + '</div>'
                + '<div class="pop-body">'
                + '<div class="inner">팝업 컨텐츠 테스트 입니다.</div>'
                + '</div>'
                + '</div>'
                + '</div>'
                + '</div>'
                + '<!-- // popup : END -->';
            return render;
        }
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
        htmlInPopups : popupRender,
        commonPopup : include.html.commonPopup()
    }
    wrap.innerHTML =
        render.loader +
        render.header +
        render.main +
        render.footer +
        render.overlayNav +
        render.scrollTopMove +
        render.htmlInPopups +
        render.commonPopup
}

document.addEventListener("DOMContentLoaded", function() {
    console.log('render : START')
    defaultRender();
    console.log('render : END')
});


