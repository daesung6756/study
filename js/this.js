'use strict'

// 함수 표현식
const inJsFunction1 = function() {
    console.log(`.js 안에서 함수 표현식 : `, this)
}
inJsFunction1(); // undefined

// 함수 선언식
function inJsFunction2(){
    console.log(`.js 안에서 함수 선언식 : `, this);
}
inJsFunction2(); // undefined

// 화살표 함수
const inJsFunction3 = () => {
    console.log(`.js 안에서 화살표 함수 : `, this)
}
inJsFunction3(); // window


// 메소드 (함수 내부)
const methodsFunction2 = {
    testMethod : function () {
        console.log(`.js 안에서 메소드 : `, this);
    }
}
methodsFunction2.testMethod();// {testMethod: ƒ}

//생성자 함수
function ConstructorFunction2(){
    console.log(`.js 안에서 생성자 : `, this);
}

const constructorObj2 = new ConstructorFunction2();
// ConstructorFunction2{}


//간접 실행
function indirect2(){
    console.log(`.js 안에서 간접 실행 : `, this);
}
const indirect2obj = {name:'My indirect2'};
indirect2.apply(indirect2obj) // {name:'My indirect2'}
indirect2.call(indirect2obj) // {name:'My indirect2'}


