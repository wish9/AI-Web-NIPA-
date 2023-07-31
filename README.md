# AI-Web-NIPA

정보통신산업진흥원(NIPA)에서 주관하는 <AI 서비스 완성! AI+웹개발 취업캠프 - 프론트엔드&백엔드> 과정 학습/프로젝트/과제 기록을 위한 repository입니다.
<br>
https://velog.io/@wish17?tag=JavaScript
관련된 설명, 내용은 블로그에서 더 편하게 확인 가능합니다.



# JavaScript

> 특징
- 자바스크립트는 객체 기반의 스크립트 언어다.
- 자바스크립트는 동적이며, 타입을 명시할 필요가 없는 인터프리터언어다.
- 자바스크립트는 Node.js와 같은 프레임워크를 사용하면 서버 측 프로그래밍에서도 사용할 수 있다.

>인터프리터 언어
- 컴파일 작업을 거치지 않고, 소스 코드를 바로 실행할 수 있는 언어

## 데이터 타입

### 원시 타입

<table>
<thead>
<tr>
<th>데이터 타입</th>
<th>설명</th>
</tr>
</thead>
<tbody>
<tr>
<td>숫자타입(Number)</td>
<td>정수와 실수 구분 없는 숫자 타입</td>
</tr>
<tr>
<td>문자열타입(String)</td>
<td>문자열, 텍스트 데이터</td>
</tr>
<tr>
<td>불리언타입(Boolean)</td>
<td>참(true), 거짓(false)</td>
</tr>
<tr>
<td>undefined 타입</td>
<td>값을 할당하지 않은 변수에 할당되는 값</td>
</tr>
<tr>
<td>null 타입</td>
<td>어떤 값이 의도적으로 비어있음을 표현</td>
</tr>
<tr>
<td>심볼 타입</td>
<td>유일하며 변경할수 없는 값, 객체의 키로 유일한 식별자를 만들고 싶을 때 사용</td>
</tr>
</tbody>
</table>

#### Number
- 숫자를 나타내는 타입
- 정수, 실수, 특별한 값인 NaN(Not a Number), Infinity 및 -Infinity를 포함한다.

#### String
- 문자열을 나타내는 타입
- 작은 따옴표('), 큰 따옴표("), 혹은 백틱으로 묶인 문자의 집합이다.

#### Boolean
논리적인 값을 나타내는 타입
- true 혹은 false 값을 가질 수 있다.

#### Null
- 변수에 값이 없음을 명시적으로 나타내는 타입

#### Undefined
- 변수가 선언되었지만 아직 값이 할당되지 않은 상태를 나타내는 타입

#### Symbol
- 고유하고 수정 불가능한 데이터 타입

#### BigInt
- 매우 큰 정수를 나타내는 데 사용하는 타입

### 객체 타입(object type)

#### Object
- 여러 가지 값과 함수를 포함할 수 있는 복합 타입
- 배열, 함수, 날짜, 정규 표현식 등 다양한 내장 객체를 포함한다.


***

## 변수(variable)

> 데이터(data)를 저장할 수 있는 메모리 공간


- let
    - 변수를 선언하고 재할당도 가능 언제든 값을 바꿀 수 있음
- const
    - 변수에 한번 값을 할당하면 다시 값을 바꿀 수 없음
- var
    - let의 옛날버전. let과 작동원리는 같으나 호이스팅과같은 문제가 있음
    
***

## 암묵적 타입 변환

> 자바스크립트 엔진이 개발자의 의도와 상관없이 코드 문맥을 파악하여 강제적으로 타입 변환을 실행하는 것

### 문자열 타입으로 변환

- `+` 연산자는 피연산자 중 하나 이상의 문자가 포함되면 문자열로 타입을 변환한다.

```js
var a = 1 + '2'
console.log(a) // '12'
console.log(typeof a) // string

var b = 0 + ''
console.log(b) // '0'
console.log(typeof b) // string

var c = true + ''
console.log(c) // 'true'
console.log(typeof c) // string

var d = null + ''
console.log(d) // 'null'
console.log(typeof d) // string

var e = ({}) + ''
console.log(e) // [object Object]
console.log(typeof e) // string
```

### 숫자 타입으로 변환

- `+`가 아닌 산술 연산자의 경우 숫자타입이 아닌 피연산자를 암묵적으로 숫자로 변환한다.

```js
console.log(6 - '3')  // 3
console.log(6 * '3')  // 18
console.log(6 / '3')  // 2
console.log(6 / '삼') // NaN
```

- 크기를 비교하는 >, < 연산자는 숫자타입이 아닌 피연산자를 암묵적으로 숫자로 변환한다.

```js
console.log('5' > 3) // true
console.log('5' < '3') // false
console.log(3 <= '5') // true 
```

- `+` 단항 연산자는 숫자타입이 아닌 피연산자를 암묵적으로 숫자로 변환한다.

```js
console.log(+'5') // 5
console.log(+'') // 0
console.log(+'오') // NaN

console.log(+true) // 1
console.log(+false) // 0

console.log(+null) // 0

console.log(+undefined) // NaN
console.log(+(Symbol())) // TypeError: Cannot convert a Symbol value to a number

console.log(+{}) // NaN
console.log(+[]) // 0
```

### 불리언 타입으로 변환

- 자바스크립트 엔진은 제어문의 조건을 불리언 타입으로 암묵적으로 타입변환한다.

- False로 평가되는 값 = (false, undefined, null, 0, '', NaN)

```js
var a = false
var b = undefined
var c = null
var d = 0
var e = ''
var f = NaN

if(a) console.log('표시안됨')
if(b) console.log('표시안됨')
if(c) console.log('표시안됨')
if(d) console.log('표시안됨')
if(e) console.log('표시안됨')
if(f) console.log('표시안됨')
```

***

## 명시적 타입 변환

<p>자바스크립트 내장 객체를 이용해 명시적으로 타입을 변경하는 것을 말한다.</p>

### 문자열 타입으로 변환

- 내장 함수 또는 <code>Object.prototype.toString</code> 메서드를 사용한다.

```js
//내장 함수 사용
console.log(String(5))  // "5"
console.log(String(NaN))  // "NaN"

console.log(String(true)) // "true"
console.log(String(false)) // "false"

//Object.prototype.toString 메서드를 사용
console.log((5).toString()); // "5"
console.log((NaN).toString()); // "NaN"

console.log((true).toString()) // "true"
console.log((false).toString()) // "false"
```


### 숫자 타입으로 변환

- `Number` 또는 `parseInt`, `parsFloat` 를 사용한다.


```js
console.log(Number('0')) // 0
console.log(Number('1.5')) // 1.5

console.log(Number(true)) // 1
console.log(Number(false)) // 0

//parseInt, parsFloat (문자열만 변환가능)
console.log(parseInt('0')) // 0
console.log(parseInt('1.5')) // 1
console.log(parseFloat('1.5')) // 1.5
```
  

### 불리언 타입으로 변환
<ul>
<li><code>Boolean</code> 함수로 변환</li>
</ul>

```js
console.log(Boolean('a')) // true
console.log(Boolean('')) // false
console.log(Boolean('false')) // true

console.log(Boolean(0)) // false
console.log(Boolean(1)) // true
console.log(Boolean(NaN)) // false
console.log(Boolean(Infinity)) // true

console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false

console.log(Boolean({})) // true
console.log(Boolean([])) // true
```

![](https://velog.velcdn.com/images/wish17/post/d5af52f5-1f31-4940-8e8a-985fcc6c50a4/image.png)

# JavaScript

## 연산자

### 산술 연산자

<table class="tb-2" summary="">
	<thead>
		<tr class="bg">
			<th>산술 연산자</th>
			<th>설명</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>+</td>
			<td>더하기</td>
		</tr>
		<tr>
			<td>-</td>
			<td>빼기</td>
		</tr>
		<tr>
			<td>*</td>
			<td>곱하기</td>
		</tr>
		<tr>
			<td>/</td>
			<td>나누기</td>
		</tr>
		<tr>
			<td>%</td>
			<td>왼쪽 피연산자의 값을 오른쪽 피연산자의 값으로 나눈 후, 그 나머지를 반환</td>
		</tr>
	</tbody>
</table>

```js
let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0
```

### 할당 연산자

```js
let a = 10;

a += 5; // a = a + 5
console.log(a); // 15

a -= 5; // a = a - 5
console.log(a); // 10

a *= 2; // a = a * 2
console.log(a); // 20

a /= 2; // a = a / 2
console.log(a); // 10

a %= 3; // a = a % 3
console.log(a); // 1
```

### 비교 연산자

```js
let a = 10;
let b = 5;

console.log(a == b); // false
console.log(a === '10'); // false
console.log(a != b); // true
console.log(a !== '10'); // true
console.log(a < b); // false
console.log(a > b); // true
console.log(a <= b); // false
console.log(a >= b); // true
```

### 논리 연산자

```js
let a = true;
let b = false;

console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false
console.log(!b); // true
```

### 스프레드(전개) 연산자

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3); // {a: 1, b: 2, c: 3, d: 4}

function sum(a, b, c) {
  return a + b + c;
}
const arr = [1, 2, 3];
console.log(sum(...arr)); // 6
```

### 연산자 우선순위

<table class="tb-2" summary="">
	<thead>
		<tr class="bg">
			<th style="width: 10%;">우선순위</th>
			<th style="width: 10%;">연산자</th>
			<th style="width: 50%;">설명</th>
			<th style="width: 30%;">결합 방향</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><strong>1</strong></td>
			<td>()</td>
			<td>묶음(괄호)</td>
			<td>-</td>
		</tr>
		<tr>
			<td colspan="1"><strong>2</strong></td>
			<td>.</td>
			<td>멤버 접근</td>
			<td>왼쪽에서 오른쪽으로</td>
		</tr>
		<tr>
			<td colspan="1">&nbsp;</td>
			<td>new</td>
			<td>인수 있는 객체 생성</td>
			<td>-</td>
		</tr>
		<tr>
			<td colspan="1"><strong>3</strong></td>
			<td>()</td>
			<td>함수 호출</td>
			<td>왼쪽에서 오른쪽으로</td>
		</tr>
		<tr>
			<td colspan="1">&nbsp;</td>
			<td>new</td>
			<td>인수 없는 객체 생성</td>
			<td>오른쪽에서 왼쪽으로</td>
		</tr>
		<tr>
			<td colspan="1"><strong>4</strong></td>
			<td>++</td>
			<td>후위 증가 연산자</td>
			<td>-</td>
		</tr>
		<tr>
			<td colspan="1">&nbsp;</td>
			<td>--</td>
			<td>후위 감소 연산자</td>
			<td>-</td>
		</tr>
		<tr>
			<td colspan="1"><strong>5</strong></td>
			<td>!</td>
			<td>논리 NOT 연산자</td>
			<td>오른쪽에서 왼쪽으로</td>
		</tr>
		<tr>
			<td colspan="1">&nbsp;</td>
			<td>~</td>
			<td>비트 NOT 연산자</td>
			<td>오른쪽에서 왼쪽으로</td>
		</tr>
		<tr>
			<td colspan="1">&nbsp;</td>
			<td>+</td>
			<td>양의 부호 (단항 연산자)</td>
			<td>오른쪽에서 왼쪽으로</td>
		</tr>
		<tr>
			<td colspan="1">&nbsp;</td>
			<td>-</td>
			<td>음의 부호 (단항 연산자)</td>
			<td>오른쪽에서 왼쪽으로</td>
		</tr>
		<tr>
			<td colspan="1">&nbsp;</td>
			<td>++</td>
			<td>전위 증가 연산자</td>
			<td>오른쪽에서 왼쪽으로</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>--</td>
			<td>전위 감소 연산자</td>
			<td>오른쪽에서 왼쪽으로</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>typeof</td>
			<td>타입 반환</td>
			<td>오른쪽에서 왼쪽으로</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>void</td>
			<td>undefined 반환</td>
			<td>오른쪽에서 왼쪽으로</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>delete</td>
			<td>프로퍼티의 제거</td>
			<td>오른쪽에서 왼쪽으로</td>
		</tr>
		<tr>
			<td><strong>6</strong></td>
			<td>**</td>
			<td>거듭제곱 연산자</td>
			<td>오른쪽에서 왼쪽으로</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>*</td>
			<td>곱셈 연산자</td>
			<td>왼쪽에서 오른쪽으로</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>/</td>
			<td>나눗셈 연산자</td>
			<td>왼쪽에서 오른쪽으로</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>%</td>
			<td>나머지 연산자</td>
			<td>왼쪽에서 오른쪽으로</td>
		</tr>
		<tr>
			<td><strong>7</strong></td>
			<td>+</td>
			<td>덧셈 연산자 (이항 연산자)</td>
			<td>왼쪽에서 오른쪽으로</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>-</td>
			<td>뺄셈 연산자 (이항 연산자)</td>
			<td>왼쪽에서 오른쪽으로</td>
		</tr>
		<tr>
			<td><strong>8</strong></td>
			<td>&lt;&lt;</td>
			<td>비트 왼쪽 시프트 연산자</td>
			<td>왼쪽에서 오른쪽으로</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>&gt;&gt;</td>
			<td>부호 비트를 확장하면서 비트 오른쪽 시프트</td>
			<td>왼쪽에서 오른쪽으로</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>&gt;&gt;&gt;</td>
			<td>부호 비트를 확장하지 않고 비트 오른쪽 시프트</td>
			<td>왼쪽에서 오른쪽으로</td>
		</tr>
		<tr>
			<td><strong>9</strong></td>
			<td>&lt;</td>
			<td>관계 연산자(보다 작은)</td>
			<td>왼쪽에서 오른쪽으로</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>&lt;=</td>
			<td>관계 연산자(보다 작거나 같은)</td>
			<td>왼쪽에서 오른쪽으로</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>&gt;</td>
			<td>관계 연산자(보다 큰)</td>
			<td>왼쪽에서 오른쪽으로</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>&gt;=</td>
			<td>관계 연산자(보다 크거나 같은)</td>
			<td>왼쪽에서 오른쪽으로</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>instanceof</td>
			<td>인스턴스 여부 판단</td>
			<td>왼쪽에서 오른쪽으로</td>
		</tr>
		<tr>
			<td><strong>10</strong></td>
			<td>==</td>
			<td>동등 연산자</td>
			<td>왼쪽에서 오른쪽으로</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>===</td>
			<td>일치 연산자</td>
			<td>왼쪽에서 오른쪽으로</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>!=</td>
			<td>부등 연산자</td>
			<td>왼쪽에서 오른쪽으로</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>!==</td>
			<td>불일치 연산자</td>
			<td>왼쪽에서 오른쪽으로</td>
		</tr>
		<tr>
			<td><strong>11</strong></td>
			<td>&amp;</td>
			<td>비트 AND 연산자</td>
			<td>왼쪽에서 오른쪽으로</td>
		</tr>
		<tr>
			<td><strong>12</strong></td>
			<td>^</td>
			<td>비트 XOR 연산자</td>
			<td>왼쪽에서 오른쪽으로</td>
		</tr>
		<tr>
			<td><strong>13</strong></td>
			<td>|</td>
			<td>비트 OR 연산자</td>
			<td>왼쪽에서 오른쪽으로</td>
		</tr>
		<tr>
			<td><strong>14</strong></td>
			<td>&amp;&amp;</td>
			<td>논리 AND 연산자</td>
			<td>왼쪽에서 오른쪽으로</td>
		</tr>
		<tr>
			<td><strong>15</strong></td>
			<td>||</td>
			<td>논리 OR 연산자</td>
			<td>왼쪽에서 오른쪽으로</td>
		</tr>
		<tr>
			<td><strong>16</strong></td>
			<td>? :</td>
			<td>삼항 연산자</td>
			<td>오른쪽에서 왼쪽으로</td>
		</tr>
		<tr>
			<td><strong>17</strong></td>
			<td>=</td>
			<td>대입 연산자<br>
			(=, +=, -=, *=, /=, %=, &lt;&lt;=, &gt;&gt;=, &gt;&gt;&gt;=, &amp;=, ^=, |=)</td>
			<td>오른쪽에서 왼쪽으로</td>
		</tr>
		<tr>
			<td><strong>18</strong></td>
			<td>...</td>
			<td>전개</td>
			<td>-</td>
		</tr>
		<tr>
			<td><b>19</b></td>
			<td>,</td>
			<td>쉼표 연산자</td>
			<td>왼쪽에서 오른쪽으로</td>
		</tr>
	</tbody>
</table>

***

## 조건문

### if문

```js
if (조건식) {
  // 조건식이 참일 때 실행될 코드
}

let num = 5;

if (num < 0) {
  console.log("음수입니다.");
} else if (num == 0) {
  console.log("0입니다.");
} else if (num < 10) {
  console.log("한 자리 양수입니다.");
} else {
  console.log("두 자리 이상의 양수입니다.");
}
```

### switch-case

- 특정 값에 대한 여러 가지 조건을 비교하고 분기할 때 주로 사용

- if문과 유사하지만, 하나의 변수에 대해 많은 조건을 비교하는 경우에는 if문보다 switch문이 더 가독성이 좋고 간결한 코드를 작성할 수 있다.

```js
switch (변수) {
  case 값1:
    // 값1일 때 실행할 코드
    break;
  case 값2:
    // 값2일 때 실행할 코드
    break;
  default:
    // 모든 case에 해당하지 않을 때 실행할 코드
}
```

***

## 반복문

### for

```js
for (초기식; 조건식; 증감식) {
  // 실행할 코드 블록
}
```

```js
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum); // 55
```

### for-of

- 배열과 같은 iterable한 객체를 순회할 때 사용

- java의 향상된 for문 같은거


```js
for (variable of iterable) {
  // 반복 실행될 코드
}
```

```js
const arr = [1, 2, 3];

for (let num of arr) {
  console.log(num); // 1, 2, 3이 차례대로 출력됨
}
```

### for-in

- 객체의 속성을 열거할 때 사용하는 반복문

```js
for (variable in object) {
  // code to be executed
}
```

```js
const person = {
  name: "Alice",
  age: 30,
  gender: "female",
};

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(`${key}: ${person[key]}`);
  }
}
```

### while

```js
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

### do-while

- while문과는 달리 조건을 먼저 검사하지 않고, `do{}` 블록 내부의 코드를 최소한 한 번은 실행한 후 조건을 검사한다.

- 그냥 간단하게 while문 순서 뒤집힌거~

```js
do {
  // 반복 실행될 코드
} while (조건);
```

```js
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 10);
```

***

## 자료구조(Data structure)

### 배열(Array)

#### 배열 선언 및 초기화

```js
let arr = []; // 빈 배열 선언
let arr2 = [1, 2, 3]; // 원소가 있는 배열 선언
```

#### 원소 추가 및 삭제

```js
let arr = [1, 2, 3];
arr.push(4); // 마지막에 원소 추가
arr.pop(); // 마지막 원소 삭제
// cf. 파이썬처럼 pop(-1) 안된다. 자바스크립트의 pop()은 매개변수를 받지 않음
arr.unshift(0); // 첫번째 위치에 원소 추가
arr.shift(); // 첫번째 원소 삭제
```

#### 원소 접근

```js
let arr = [1, 2, 3];
console.log(arr[2]); // 3
```

#### 배열 순회

```js
let arr = [1, 2, 3];

// for문을 사용한 순회
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// forEach 메서드를 사용한 순회
arr.forEach(function(element) {
  console.log(element);
});

// for-of문을 사용한 순회
for (let element of arr) {
  console.log(element);
}
```

#### 배열 복사

- 얕은 복사
    - 주소값 참조 => 복사한 배열의 요소가 바뀌면 원본도 바뀐다.

```js
let arr = [1, 2, 3];

// 배열 전체를 복사
let arr2 = arr.slice();

// 일부 원소만 복사
let arr3 = arr.slice(1, 2); // [2]

// ES6에서 추가된 전개 연산자(...)를 사용한 복사
let arr4 = [...arr];
```

- 깊은 복사

```js
let arr = [[1], [2], [3]];
let deepCopiedArr = JSON.parse(JSON.stringify(arr));
```

	- 위 방법의 단점
		- 메서드는 원본 배열에서 함수, undefined, 심볼 등을 제거한다.
		- 원본 배열이 순환 참조를 포함하고 있으면, 이 방법은 에러를 발생시킨다.
		- 성능 측면에서 비효율적일 수 있습니다. 큰 배열을 복사할 때 특히 그렇다.

따라서 아래방법을 사용하자


```js
let arr = [[1], [2], [3]];
let deepCopiedArr = _.cloneDeep(arr);

```



#### 배열 정렬

```js
let arr = [3, 1, 2];

// 오름차순 정렬
arr.sort(function(a, b) {
  return a - b;
});

// 내림차순 정렬
arr.sort(function(a, b) {
  return b - a;
});
```

#### 배열 검색

```js
let arr = [1, 2, 3];

// 배열에서 원소 검색
console.log(arr.indexOf(2)); // 1

// 조건에 맞는 원소 검색
console.log(arr.find(function(element) {
  return element > 1;
})); // 2(1보다 큰 첫번째 숫자)
//find대신 filter를 쓰면 1보다 큰 모든 숫자를 반환
```

### 해시(Hash)와 객체(Object)

#### 해시와 객체 선언 및 초기화

```js
let obj = {}; // 빈 객체 선언
let obj2 = {key1: 'value1', key2: 'value2'}; // 속성이 있는 객체 선언
```

#### 속성 추가 및 삭제

```js
let obj = {key1: 'value1', key2: 'value2'};
obj.key3 = 'value3'; // 속성 추가
delete obj.key3; // 속성 삭제
```

#### 속성 접근

```js
let obj = {key1: 'value1', key2: 'value2'};
console.log(obj.key1); // 'value1'
```

#### 객체 순회

```js
let obj = {key1: 'value1', key2: 'value2'};

// for-in 문을 사용한 순회
for (let key in obj) {
  console.log(key); // 키 출력
  console.log(obj[key]); // 값 출력
}

// Object.keys를 사용한 순회
Object.keys(obj).forEach(function(key) {
  console.log(key); // 키 출력
  console.log(obj[key]); // 값 출력
});

// Object.entries를 사용한 순회
for (let [key, value] of Object.entries(obj)) {
  console.log(key, value); // 키와 값 동시 출력
}

```

#### 객체 복사

- 얕은 복사

```js
let obj = {key1: 'value1', key2: 'value2'};

// Object.assign을 사용한 복사
let obj2 = Object.assign({}, obj);

// ES6에서 추가된 전개 연산자(...)를 사용한 복사
let obj3 = {...obj};
```

- 깊은 복사

```js
let obj = {key1: {subkey1: 'subvalue1'}, key2: 'value2'};
let deepCopiedObj = _.cloneDeep(obj);
```

#### 객체 속성 검색

```js
let obj = {key1: 'value1', key2: 'value2'};

// 객체에서 Key 검색
console.log(obj.hasOwnProperty('key2'));

// 객체에서 Value 검색
console.log(Object.values(obj).includes('value2'));
```

***

![](https://velog.velcdn.com/images/wish17/post/3f4d74b0-efed-40da-be9a-68adcf207df1/image.png)

# JavaScript

## 함수 (Function)

>일련의 문장들을 하나로 묶어서 재사용이 가능하게 하는 기본적인 코드 블록
- 필요할 때마다 호출하여 해당 작업을 반복해서 수행(사용) 가능

함수를 정의하는 방법에는 여러 가지가 있지만, 일반적으로 function 키워드를 사용한다.

```js
function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2)); // 3
```

### 지역 변수 (Local Variables)

> 함수 내부에서 선언된 변수를 지역 변수

함수 내에서만 접근 가능하며, 함수 실행이 종료되면 생명주기가 끝난다.

```js
function test() {
  let local = 'I am a local variable';
  console.log(local); // I am a local variable
}

test();
console.log(local); // ReferenceError: local is not defined

```

### 전역 변수 (Global Variables)

> 함수의 외부에서 선언된 변수

프로그램의 어느 영역에서나 접근할 수 있으며, 웹 페이지(또는 실행코드)가 닫혀야만 메모리에서 사라진다.

```js
let global = 'I am a global variable';

function test() {
  console.log(global); // I am a global variable
}

test();
console.log(global); // I am a global variable
```

***

## 객체 (Objects)

> 프로퍼티와 메소드를 가지고 있는 데이터의 컬렉션
- JavaScript에서 거의 모든 것은 객체다.

```js
let person = {
  name: 'wish',
  age: 26,
  sayHello: function() {
    console.log('Hello, my name is ' + this.name);
  }
};

console.log(person.name); // wish
console.log(person.age); // 26
person.sayHello(); // Hello, my name is wish
```

### 프로퍼티 (Properties)

> 객체의 속성을 의미
- `name`과 `age`는 각각 `person` 객체의 프로퍼티다.

프로퍼티는 점 표기법(dot notation) 또는 대괄호 표기법(bracket notation)을 사용하여 접근할 수 있다.

```js
let person = {
  name: 'Alice',
  age: 20
};

console.log(person.name); // Alice
console.log(person['age']); // 20
```

### 메소드 (Methods)

> 객체에 속한 함수를 의미
- ``sayHello``는 ``person`` 객체의 메소드다.

메소드는 점 표기법을 사용하여 호출할 수 있다.

***

## 표준객체

> 다른 객체의 기초가 되는 핵심적인 객체
- 기본 JavaScript 내장 객체

| 객체 | 메소드 | 설명 |
|------|-------|-----|
| Number | parseInt() | 문자열을 정수로 변환 |
| | parseFloat() | 문자열을 실수로 변환 |
| | isNaN() | 입력된 값이 숫자가 아닌지 판별 |
| | isInteger() | 입력된 값이 정수인지 판별 |
| Math | min() | 입력된 값들 중에서 가장 작은 수를 반환 |
| | max() | 입력된 값들 중에서 가장 큰 수를 반환 |
| | random() | 0 이상 1 미만의 랜덤한 수를 반환 |
| | round() | 입력된 값에 가장 가까운 정수를 반환 |
| | floor() | 입력된 값의 버림 값을 반환 |
| | ceil() | 입력된 값의 올림 값을 반환 |
| Date | getFullYear() | 입력된 날짜의 연도를 반환 |
| | getDate() | 입력된 날짜의 일자를 반환 |
| | getDay() | 입력된 날짜의 요일을 반환 |
| | getTime() | 1970년 1월 1일 0시 0분 0초부터 입력된 날짜까지의 밀리초를 반환 |
| | ISO 날짜 양식 | YYYY-MM-DDTHH:MM:SSZ |
| | Long 날짜 양식 | MMMM DD YYYY |
| | Short 날짜 양식 | MM/DD/YYYY |
| String | indexOf() | 입력된 값이 처음으로 나타나는 인덱스를 반환 |
| | lastIndexOf() | 입력된 값이 마지막으로 나타나는 인덱스를 반환 |
| | charAt() | 입력된 인덱스에 해당하는 문자를 반환 |
| | slice() | 입력된 인덱스 범위의 문자열을 추출 |
| | substring() | 입력된 인덱스 범위의 문자열을 추출 |
| | split() | 입력된 구분자를 기준으로 문자열을 분리하여 배열로 반환 |
| Array | push() | 배열의 끝에 새로운 요소를 추가 |
| | pop() | 배열의 마지막 요소를 제거하고 그 요소를 반환 |
| | sort() | 배열의 요소를 정렬 |

***

## 예외 처리(Exception Handling)

자바스크립트에서는 try, catch, finally, throw 등의 키워드를 사용하여 예외를 처리한다.

`try`
- 예외가 발생할 가능성이 있는 코드 블록을 정의한다.

`catch`
- try 블록에서 예외가 발생했을 때 실행할 코드를 정의한다.

`finally`
- 예외 발생 여부와 상관없이 항상 실행할 코드를 정의한다.

`throw`
- 사용자가 정의하는 예외를 발생시킨다.

```js
try {
  // 예외가 발생할 가능성이 있는 코드
} catch (error) {
  // 예외가 발생했을 때 실행할 코드
} finally {
  // 예외 발생 여부와 상관없이 항상 실행할 코드
}
```

```js
function checkNumber(num) {
  if (isNaN(num)) {
    throw new Error('입력값이 숫자가 아닙니다.');
  } else {
    console.log('입력값은 숫자입니다.');
  }
}

try {
  checkNumber('abc'); // 숫자가 아닌 값을 입력
} catch (error) {
  console.log('Error: ' + error.message);
}
```

***

## 정규 표현식(Regular Expression)

> 문자열에서 특정 내용을 찾거나 대체하거나 추출할 때 사용하는 표현식
- 자열의 패턴을 정의하는 데 사용되는 도구
- /pattern/modifiers의 형태로 표현한다.

`pattern`
- 찾거나 매칭할 패턴을 정의한다.

`modifiers`
- 검색에 대한 옵션 설정

#### 예시

```js
// "a" 다음에 "b"가 하나 이상, 그 다음에 "c"가 오는 문자열을 찾는 정규 표현식
let re = /ab+c/;
```

```js
let re = /\d+/g; // 하나 이상의 숫자를 전역적으로 찾는 정규 표현식
/*
g = 규 표현식의 플래그 중 하나로, "global"의 약자
g 플래그를 사용하면 정규 표현식이 문자열 전체를 검색하고 모든 일치하는 결과를 반환한다.
*/
let str = 'The year is 2023 and the month is 7';
let result = str.match(re); // ["2023", "7"]
```

기본적으로 정규 표현식은 패턴에 일치하는 첫 번째 결과를 찾으면 검색을 중단한다. 그러나 g 플래그를 사용하면 정규 표현식이 문자열 전체를 검색하고 모든 일치하는 결과를 반환한다.

### 주요 메타문자 (Metacharacter)

| 메타문자 | 설명 |
|---|---|
| . | 줄 바꿈을 제외한 모든 문자와 일치 |
| ^ | 입력의 시작을 나타냄 |
| $ | 입력의 끝을 나타냄 |
| * | 앞 토큰의 0번 이상 반복에 일치 |
| + | 앞 토큰의 1번 이상 반복에 일치 |
| ? | 앞 토큰의 0번 또는 1번 반복에 일치 |
| \d | 모든 숫자와 일치 |
| \w | 모든 단어 문자(알파벳, 숫자, 밑줄)와 일치 |
| \s | 모든 공백 문자와 일치 |

### 주요 플래그

| 플래그 | 설명 |
|---|---|
| g | 전역 검색 |
| i | 대/소문자 구분 없는 검색 |
| m | 여러 줄 검색 |

### 주요 메서드

| 메소드 | 설명 |
|---|---|
| exec() | 일치하는 정보의 배열을 반환하거나 불일치시 null을 반환 |
| test() | 문자열에서 일치하는지 테스트. 일치하면 true, 아니면 false 반환 |
| match() | 문자열에서 모든 일치 항목의 배열을 반환, 일치하는 항목이 없는 경우 null 반환 |
| replace() | 일부 또는 모든 일치 항목을 대체 |
| search() | 문자열에서 일치하는 항목을 검색. 일치하는 항목의 인덱스를 반환하거나<br> 검색이 실패하면 -1 반환 |



***



## 질문 답변해보기

Q: object를 만들때 fullId 메서드를 호출한 적이 없는데 왜 호출될까?

A: 실수로 어딘가에서 호출했다?...
fullId 메서드를 호출한 적이 없으면 호출이 안되지 않나?...
질문을 이해하지 못하겠습니다.

***

Q: this. 를 안 붙이면 reference Error가 뜨는데 위에 선언을 했음에도 불구하고 왜 에러가 뜰까?

```js
// 예시 올바른 case
var person = {
    name: '홍길동',      // 이름 프로퍼티를 정의함.
    birthday: '030219',  // 생년월일 프로퍼티를 정의함.
    age: 30,
    pId: '1234567',      // 개인 id 프로퍼티를 정의함.
    fullId: function() { // 생년월일과 개인 id를 합쳐서 주민등록번호를 반환함.
        return this.birthday + this.pId;
    },
};

// 예시 reference Error가 뜨는 case
var person = {
    name: '홍길동',
    birthday: '030219',
    age: 30,
    pId: '1234567',
    fullId: function() {
        return birthday + pId;
    },
};

console.log(person)
```

A: 자바스크립트에서는 메서드를 선언하면 메서드에서 사용되는 변수들을 메서드 내부 or 전역변수에서 찾는다. 그런데 위의 경우에는 person 객체를 만드는데 사용(선언)된 변수인 birthday와 pId를 fullId에서 찾으려고 하면 fullId 메서드 내부에 선언 된 변수와 지역변수에 없는 값이기 때문에 찾지 못한다.

birthday, pId, fullId 모두 person이라는 객체의 속성이다. 객체의 속성은 해당 객체에 **'속해'** 있지만, 이는 스코프 개념과는 다르다. 객체의 메소드(즉, 객체 속성 중 함수인 것) 내에서 그 메소드가 속한 객체의 다른 속성을 접근할 때는 this 키워드를 사용해야 한다.


> 스코프
- 변수가 정의된 범위

> 함수 스코프(Function Scope)
- 자바스크립트에서 함수는 각자의 스코프를 갖는다. 
- 이 스코프 내부에서 선언된 변수들은 그 함수 내부에서만 접근이 가능하며, 그 외의 영역에서는 접근할 수 없다.
- 함수 스코프는 해당 함수 내부에서 선언된 변수, 그리고 그 함수가 정의된 시점의 스코프(즉, 상위 스코프)를 포함한다.

> this 키워드
- 객체의 메소드 내부에서 this를 사용하면, this는 그 메소드를 호출한 객체를 가리킨다.
    - 따라서 객체의 메소드 내부에서 this를 사용해 그 객체의 다른 속성에 접근할 수 있다.

***

## 실습 - 오목게임 만들기

1. Nodejs와 함께 콘솔창에서 실행되도록 사용자 입출력 도구를 사용한다.
2. 오목판 사이즈는 30x30으로 고정한 후 정사각형의 형태의 오목판을 만든다.
3. 사용자 입력 도구에 좌표값 (15,15)라고 입력하여 바둑돌을 둔다.
4. 흑은 1로, 백은 0으로 표기하여 화면에 흑과 백이
번갈아가면서 두도록 입력 도구가 계속 뜨도록 입력 받는다.
5. 오목 규칙에 따라 5줄이 먼저 완성되면 “Game over”와 같이
누가 이겼는지 승패를 알리는 출력을 만든다.
6. 승패가 계속 나지 않을 경우 실행 후 5분이 지나면 자동 종료시킨다.

> 아직 미완성이다.
- 6번 기능 추가 안됨
- 4중 반복문을 사용중이라 개선이 필요해 보인다.


![](https://velog.velcdn.com/images/wish17/post/b88755c3-c1fe-4371-a9d2-d1ab6968dbbb/image.png)


```js
// 파이썬의 input() 함수 역할을 하는 사용자 입력을 받는 Node.js 기능
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('행, 열 <- 왼쪽과 같은 양식으로 좌표값을 입력해주세요.')
console.log('ex) 1,1 or 1, 1 or 7, 3 or 7,3 등')

let arr = new Array(30);
for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(30).fill('');
}

let turn = 0;

// 입력 받고 최신화 된 보드 출력해주는 메서드
function printBoard() {
  for(let i = 0; i < 30; i++) {
      console.log(arr[i].map(cell => cell === '' ? '*' : cell === '흑' ? 1 : 0).join(' '));
  }
}

/*
 이긴사람 있는지 확인하는 메서드
 가로, 세로, 대각석 탐색

 cf. 4중 반복문 오반데... 나중에 수정...
*/
function checkWin() {
  const directions = [[0, 1], [1, 0], [1, 1], [-1, 1]];

  for(let i = 0; i < 30; i++) {
    for(let j = 0; j < 30; j++) {
      if(arr[i][j] !== '') {
        for(let direction of directions) {
          if(checkLine(i, j, direction)) {
            return true;
          }
        }
      }
    }
  }
  return false;
}


// 한 방향(라인)에 대해 오목이 완성되었는지 확인하는 메서드
function checkLine(x, y, direction) {
    let i = x, j = y, count = 0;
    while(i >= 0 && i < 30 && j >= 0 && j < 30 && arr[i][j] === arr[x][y]) {
        count++;
        i += direction[0];
        j += direction[1];
    }
    return count === 5;
}


/*
    입력값 받아서 보드에 넣는 실질적인 게임 메서드
    + 예외처리
*/
function play() {
    let player = turn % 2 == 0 ? '백' : '흑'; // w for white, b for black
    rl.question(`${player === '흑' ? '흑' : '백'}색 돌을 놓을 좌표를 입력하세요 :`, (inputValue) => {
        let coords = inputValue.split(',');
        let x = parseInt(coords[0]);
        let y = parseInt(coords[1]);

        // 입력값 범위 초과에 대한 예외처리
        if(x < 0 || x >= 30 || y < 0 || y >= 30) {
            console.log("0이상 30미만 값을 입력해주세요.");
            play();
            return;
        }

        // 이미 둔 자리 or 잘못된 입력양식에 대한 예외처리
        if(arr[x][y] !== '') {
            if(arr[x][y] === '흑' || arr[x][y] === '백') {
                console.log("이미 돌을 놓은 자리입니다.");
            }else {
                console.log("올바른 좌표값을 입력하세요.");
                console.log("예시: 1,3 or 1, 3 or 10, 15 등등");
                console.log("잘못된 예시: [1,3] or 1,     2 or 1.2");
            }
            play();
            return;
        }

        arr[x][y] = player;
        printBoard();

        if(checkWin()) {
            console.log('Game over')
            console.log(`${player === '흑' ? '흑' : '백'}색돌이 승리하였습니다!! `);
            rl.close();
        } else {
            turn++;
            play();
        }
    });
}

play();

```

#### 1. 승패가 계속 나지 않을 경우 실행 후 5분이 지나면 자동 종료시키는 기능 추가

[`setTimeout()`](https://sisiblog.tistory.com/229)

- n초 뒤 동작을 지정할 수 있는 메서드

#### 2. 시간복잡도 O(n^4) -> O(n^2) 개선

```js
// 파이썬의 input() 함수 역할을 하는 사용자 입력을 받는 Node.js 기능
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 5분 지나면 입력 종료되는 기능
let countingTime = setTimeout(function() {
    console.log('5분이 지났습니다. 게임이 종료됩니다.');
    rl.close();
}, 5 * 60 * 1000);

console.log('행, 열 <- 왼쪽과 같은 양식으로 좌표값을 입력해주세요.')
console.log('ex) 1,1 or 1, 1 or 7, 3 or 7,3 등')

let arr = new Array(30);
for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(30).fill('');
}

let turn = 0;

// 입력 받고 최신화 된 보드 출력해주는 메서드
function printBoard() {
  for(let i = 0; i < 30; i++) {
      console.log(arr[i].map(cell => cell === '' ? '*' : cell === '흑' ? 1 : 0).join(' '));
  }
}

/*
 이긴사람 있는지 확인하는 메서드
 가로, 세로, 대각석 탐색
*/
function checkWin(x, y) {
    const directions = [[0, 1], [1, 0], [1, 1], [-1, 1]];

    for(let direction of directions) {
      if(checkLine(x, y, direction)) {
        return true;
      }
    }
  return false;
}


// 한 방향(라인)에 대해 오목이 완성되었는지 확인하는 메서드
function checkLine(x, y, direction) {
    let i = x, j = y, count = 0, xyColor = arr[x][y], used = 0;

    for (let k = 0; k < 5; k++) {
        if (arr[i][j] === xyColor){
            count++;
            i += direction[0];
            j += direction[1];
        }else {
            used = k;
            break;
        }
        if (overRange(i, j)) {
            used = k;
            break;
        }
    }

    i = x - direction[0], j = y - direction[1]
    if (overRange(i,j)) {
        return count == 5;
    }

    for (let k = 0; k < 5 - used; k++) {
        if (arr[i][j] === xyColor){
            count++;
            i -= direction[0];
            j -= direction[1];
        }else {
            break;
        }
        if (overRange(i, j)) {
            break;
        }
    }


    return count === 5;
}

// 확인하려는 좌표가 Board 범위를 초과됐는지 확인하는 메서드
function overRange(x, y) {
    if (x < 0 || x >= 30 || y < 0 || y >= 30) {
        return true;
    }
    return false;
}


/*
    입력값 받아서 보드에 넣는 실질적인 게임 메서드
    + 예외처리
*/
function play() {
    let player = turn % 2 == 0 ? '백' : '흑'; // w for white, b for black
    rl.question(`${player === '흑' ? '흑' : '백'}색 돌을 놓을 좌표를 입력하세요 :`, (inputValue) => {
        let coords = inputValue.split(',');
        let x = parseInt(coords[0]);
        let y = parseInt(coords[1]);

        // 입력값 범위 초과에 대한 예외처리
        if(x < 0 || x >= 30 || y < 0 || y >= 30) {
            console.log("0이상 30미만 값을 입력해주세요.");
            play();
            return;
        }

        // 이미 둔 자리 or 잘못된 입력양식에 대한 예외처리
        if(arr[x][y] !== '') {
            if(arr[x][y] === '흑' || arr[x][y] === '백') {
                console.log("이미 돌을 놓은 자리입니다.");
            }else {
                console.log("올바른 좌표값을 입력하세요.");
                console.log("예시: 1,3 or 1, 3 or 10, 15 등등");
                console.log("잘못된 예시: [1,3] or 1,     2 or 1.2");
            }
            play();
            return;
        }

        arr[x][y] = player;
        printBoard();

        if(checkWin(x, y)) {
            console.log('Game over')
            console.log(`${player === '흑' ? '흑' : '백'}색돌이 승리하였습니다!!`);
            rl.close();
            clearTimeout(countingTime);
        } else {
            turn++;
            play();
        }
    });
}

play();
```

#### 3. 문자열 등 잘못된 입력값에 대한 예외처리 추가 + 예외처리 기능 분리

```js
// 파이썬의 input() 함수 역할을 하는 사용자 입력을 받는 Node.js 기능
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 5분 지나면 입력 종료되는 기능
let countingTime = setTimeout(function() {
    console.log('5분이 지났습니다. 게임이 종료됩니다.');
    rl.close();
}, 5 * 60 * 1000);

console.log('행, 열 <- 왼쪽과 같은 양식으로 좌표값을 입력해주세요.')
console.log('ex) 1,1 or 1, 1 or 7, 3 or 7,3 등')

let arr = new Array(30);
for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(30).fill('');
}

let turn = 0;

// 입력 받고 최신화 된 보드 출력해주는 메서드
function printBoard() {
  for(let i = 0; i < 30; i++) {
      console.log(arr[i].map(cell => cell === '' ? '*' : cell === '흑' ? 1 : 0).join(' '));
  }
}

/*
 이긴사람 있는지 확인하는 메서드
 가로, 세로, 대각석 탐색

 cf. 4중 반복문 오반데... 나중에 수정...
*/
function checkWin(x, y) {
    const directions = [[0, 1], [1, 0], [1, 1], [-1, 1]];

    for(let direction of directions) {
      if(checkLine(x, y, direction)) {
        return true;
      }
    }
  return false;
}


// 한 방향(라인)에 대해 오목이 완성되었는지 확인하는 메서드
function checkLine(x, y, direction) {
    let i = x, j = y, count = 0, xyColor = arr[x][y], used = 0;

    for (let k = 0; k < 5; k++) {
        if (arr[i][j] === xyColor){
            count++;
            i += direction[0];
            j += direction[1];
        }else {
            used = k;
            break;
        }
        if (overRange(i, j)) {
            used = k;
            break;
        }
    }

    i = x - direction[0], j = y - direction[1]
    if (overRange(i,j)) {
        return count == 5;
    }

    for (let k = 0; k < 5 - used; k++) {
        if (arr[i][j] === xyColor){
            count++;
            i -= direction[0];
            j -= direction[1];
        }else {
            break;
        }
        if (overRange(i, j)) {
            break;
        }
    }


    return count === 5;
}

function overRange(x, y) {
    if (x < 0 || x >= 30 || y < 0 || y >= 30) {
        return true;
    }
    return false;
}

// 입력값에 대한 예외처리
function validateInput(inputValue) {
    let coords = inputValue.split(',');
    let x = parseInt(coords[0]);
    let y = parseInt(coords[1]);

    if(isNaN(x) || isNaN(y)) {
        console.log("숫자를 입력해주세요.");
        return null;
    }

    if(x < 0 || x >= 30 || y < 0 || y >= 30) {
        console.log("0이상 30미만 값을 입력해주세요.");
        return null;
    }

    if(arr[x][y] !== '') {
        if(arr[x][y] === '흑' || arr[x][y] === '백') {
            console.log("이미 돌을 놓은 자리입니다.");
        }else {
            console.log("올바른 좌표값을 입력하세요.");
            console.log("예시: 1,3 or 1, 3 or 10, 15 등등");
            console.log("잘못된 예시: [1,3] or 1,     2 or 1.2");
        }
        return null;
    }

    return [x, y];
}


/*
    입력값 받아서 보드에 넣는 실질적인 게임 메서드
*/
function play() {
    let player = turn % 2 == 0 ? '백' : '흑'; // w for white, b for black
    rl.question(`${player === '흑' ? '흑' : '백'}색 돌을 놓을 좌표를 입력하세요 :`, (inputValue) => {
        let coords = validateInput(inputValue);
        if(coords === null) {
            play();
            return;
        }
        let x = parseInt(coords[0]);
        let y = parseInt(coords[1]);

        arr[x][y] = player;
        printBoard();

        if(checkWin(x, y)) {
            console.log('Game over')
            console.log(`${player === '흑' ? '흑' : '백'}색돌이 승리하였습니다!!`);
            rl.close();
            clearTimeout(countingTime);
        } else {
            turn++;
            play();
        }
    });
}

play();

```
