'use strict'

const include = {
    head : {
        title : function(tit){
            document.write('<title>' + tit + '</title>');
        },
        meta :function () {
            document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
        },
        styles : {
            common : function () {
                document.write('<link rel="stylesheet" href="css/reset.css">');
                document.write('<link rel="stylesheet" href="css/common.css">');
                document.write('<link rel="stylesheet" href="css/layout.css">');
            },
            index : function () {
                document.write('<link rel="stylesheet" href="css/index.css">');
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
            var render = '<div class="inner">'
                + '<div class="nav-head">'
                + '<h2 class="title">Gnb</h2>'
                + '<button type="button" class="overlay-nav-close-btn" data-overlay-close="gnbNav"><i class="icon icon-cross-white"><span class="blind">GNB 닫기</span></i></button>'
                + '</div>'
                + '<ul class="nav-body">'
                + '<li><a href="index.html">Home</a></li>'
                + '<li><a href="this.html">this의 개념</a></li>'
                + '</ul>'
                + '</div>';
            return render;
        },
        header: function (){
            var render = '<div class="inner flex-wrap">'
                + '<div class="column">'
                + '<button type="button" id="overlayNavButton" class="overlay-nav-open-btn" data-overlay-open="gnbNav"><i class="icon icon-bugger-white"><span class="blind">GNB 열기</span></i></button>'
                + '</div>'
                + '<div class="column">'
                + '<div>'
                + '</div>'
                + '<div>'
                + '</div>'
                + '</div>'
                + '<div class="column">'
                + '</div>'
                + '</div>'

            return render;
        },
        footer: function () {
            var render = '<footer class="footer">'
                + '<div class="inner">이곳은 푸터 입니다.</div>'
                + '</footer>'
            return render;
        },
        scrollTopMove : function () {
            var render = '<button type="button" class="scroll-top"></button>';

            return render;
        }
    }
}


