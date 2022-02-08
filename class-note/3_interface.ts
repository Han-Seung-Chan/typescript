interface Person {
  name: string
  age: number
}

//변수에 인터페이스 활용
const khan: Person = {
  age: 23,
  name: '승찬'
}

// 함수에 인터페이스 활용
function findPerson(person: Person) {
  console.log(person);
}

const capt = {
  name: '캡틴',
  age: 33
}
findPerson(capt)

// 함수에 스펙(규칙, 구조)에 인터페이스 활용
interface SumFunction {
  (a: number, b: number): number
}
let sum: SumFunction
sum = function (a: number, b: number): number {
  return a + b
}

// 인뎅식
interface StringArray {
  [index: number]: string
}

const arr: StringArray = ['a', 'b', 'c']
//arr[0] = 10 (애러)

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp
}

const obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/
}

//obj['cssFile'] = 'a' (애러)
Object.keys(obj).forEach((el) => { })

// 인터페이스 확장
interface Men {
  name: string,
  age: number
}

interface Women extends Men {
  job: string
}
const kim: Women = {
  name: '민정',
  age: 22,
  job: 'singer'
}