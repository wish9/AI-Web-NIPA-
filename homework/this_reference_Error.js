// reference Error!!!
// 아래처럼 this.를 붙이지 않으면 스코프 벗어나서 인식 못한다!

// var person = {
//     name: '홍길동',      // 이름 프로퍼티를 정의함.
//     birthday: '030219',  // 생년월일 프로퍼티를 정의함.
//     age: 30,
//     pId: '1234567',      // 개인 id 프로퍼티를 정의함.
//     fullId: function() { // 생년월일과 개인 id를 합쳐서 주민등록번호를 반환함.
//         return birthday + pId;
//     },
// };
//
// console.log(person)

// fix

var person = {
    name: '홍길동',      // 이름 프로퍼티를 정의함.
    birthday: '030219',  // 생년월일 프로퍼티를 정의함.
    age: 30,
    pId: '1234567',      // 개인 id 프로퍼티를 정의함.
    fullId: function() { // 생년월일과 개인 id를 합쳐서 주민등록번호를 반환함.
        return this.birthday + this.pId;
    },
};

console.log(person)
console.log(person.fullId())