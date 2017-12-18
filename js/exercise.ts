type bankAccountType = {
  money: number,
  deposit: (value: number) => void,
}

type myselfType = {
  name: string,
  bankAccount: bankAccountType,
  hobbies: string[],
}

let bankAccount: bankAccountType = {
  money: 2000,
  deposit(value) {
    this.money += value
  },
}

let myself: myselfType = {
  name: 'Harry',
  bankAccount,
  hobbies: ['Maths', 'Coding'],
}

myself.bankAccount.deposit(3000)
console.log(myself)
