// string
const myName: string = 'Harry'

// number
const myAge: number = 24

// boolean
const hasHobbies: boolean = false

// assign types
const myRealAge: number = 25

// array
let hobbies: any[] = ['Cooking', 'Sports']
hobbies = [100]

// tuples
const address: [string, number] = ['SuperStreet', 99]

// enum
enum Color {
	Red,
	Green = 100,
	Blue,
}

const myColor: Color = Color.Green
console.log(myColor)

// any
let car: any = 'BMW'
console.log(car)
car = {
  brand: 'BMW',
  series: 3,
}
console.log(car)

// functions
function returnMyName(): string {
  return myName
}
console.log(returnMyName())

// void
function sayHello(): void {
  console.log('Say Hello')
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2
}
console.log(multiply(2, 10))

// function types
let myMultiply: (val1: number, val2: number) => number
myMultiply = multiply
console.log(multiply(5, 6))

// objects
let userData: { name: string, age: number } = {
  name: 'Harry',
  age: 27,
}
userData = {
  name: 'Hello',
  age: 22,
}

type Complex = { data: number[], output: (all: boolean) => number[] }

// complex object
const complex1: Complex = {
  data: [100, 3.99, 10],
  output() {
    return this.data
  },
}

const complex2: Complex = {
  data: [101, 78.9, 13],
  output() {
    return this.data
  },
}

console.log(complex1, complex2)

// union types
let myOriginalAge: (number | string) = 24
myOriginalAge = '24'

let finalValue = 30
if (typeof finalValue === 'number') {
  console.log('Final value is a number')
}

function throwNewError(): never {
  throw new Error('An Error Mesage')
}

let canAlsoBeNull: (number | null) = 12
canAlsoBeNull = null
let canThisBeAny = null
canThisBeAny = 12
console.log(canThisBeAny)
