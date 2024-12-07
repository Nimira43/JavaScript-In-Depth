class BankAccount {
  constructor(accountHolder, accountNumber, balance = 0) {
    this.accountHolder = accountHolder
    this.accountNumber = accountNumber
    this.balance = balance
  }
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount
      console.log(`Your deposit: £${amount} New balance: £${this.balance}`)
    } else {
      console.log('Cannot desposit a negative number')
    }
  }
}

let transaction1 = new BankAccount('Bob', '1234567890', 25)
console.log(transaction1)
console.log(transaction1.deposit(78.32))
console.log(transaction1)