/**
 * 변수 선언
 * 1) var - 더이상 쓰지 않는다.
 * 2) let - 
 * 3) const
 */

var name = '코드팩토리'; // 할당
console.log(name); // ''사용하면 문자로 인식

var age = 32;
console.log(age);

let ive = '아이브';
console.log(ive);

/**
 * let과 var로 선언하면 추후에 값 변경 가능
 */
ive = '안유진';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);

// const newJeans = '민지'; // 이미 값이 있기 때문에 할당 불가

/**
 * 선언과 할당
 * 1) 변수를 선언하는 것
 * 2) 할당
 */
var name;
name = '코드팩토리';

let girlfriend; // 선언만 하고 할당은 되지 않은 상태
console.log(girlfriend);