function logMessage1(value: any) {
  console.log(value);
}

logMessage1('hello')
logMessage1(100)
logMessage1(false)

function logMessage2(value: string | number) {
  if (typeof value === 'number') value.toLocaleString()
  if (typeof value === 'string') value.toString()
  throw new TypeError('value must be string or number')
}

logMessage1('hello')
logMessage1(100)

interface Person {
  name: string,
  age: number
}
interface Developer {
  name: string,
  skill: string
}

function askSomeone1(someone: Person | Developer) {
  //타입에 공통된 속성만 제공
  someone.name
}
askSomeone1({ name: '승찬', age: 23 });
askSomeone1({ name: '승범', skill: '게임개발' })

function askSomeone2(someone: Person & Developer) {
  someone.name
  someone.age
  someone.skill
}
askSomeone2({ name: '승민', age: 24, skill: '웹개발' })