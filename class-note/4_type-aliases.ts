interface Person {
  name: string,
  age: number
}

type People = {
  name: string,
  age: number
}

const kim: Person = {
  name: '이나',
  age: 30
}

const lee: People = {
  name: '선희',
  age: 50
}

type MyString = string
const str: MyString = 'hello'
