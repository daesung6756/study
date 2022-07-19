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
                + '<li><a href="index.html">바닐라 자바스크립란?</a></li>'
                + '<li><a href="this.html">this의 개념</a></li>'
                + '<li><a href="function.html">자바스크립트 함수의 종류 및 정의</a></li>'
                + '<li><a href="built-in-function.html">자바스크림트 내장 함수</a></li>'
                + '<li><a href="array-prototype.html">Array (배열)</a></li>'
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
                + '<button type="button" id="scrollTopBtn" class="scroll-top"><i class="icon icon-circle-up-arrow-green"><span class="blind">위로 이동</span></i></button>'
                + '</div>'
                + '<!--//SCROLL TOP : END -->';
            return render;
        }
    }
}


