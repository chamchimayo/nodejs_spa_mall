// << 모듈 exports 하기>>
// function add (a, b) {
//     return a + b;
// } 
// 모듈 그 자체를 바로 add 함수를 할당한다.
// module.exports = add;

// ---------------------------------------------------------------
// << export 명령어를 통해 함수 하나하나씩 보내주는 방법>>
// 1) 익명 함수 사용
// 모듈을 호출했을 때, add 키 값에는 (a, b){return a + b;} 익명함수가 할당되는 방법이다.
// exports.add = function(a, b) {
//     return a + b;
// }


// // 2) module.exports 자체를 객체로 내보내기
// function add (a, b) {
//     return a + b;
// } 
// // 모듈을 호출했을 때, add 키 값에는 add 함수가 들어가는 방법이다.
// module.exports = {add : add};


// 3) 변수에 함수 할당해서 보내기
// 모듈을 호출했을 때, add 키 값에는 add 변수 함수가 가지고 있는 값이 할당된다.
const add = (a, b) => {
    return a + b;
}

exports.add = add;



