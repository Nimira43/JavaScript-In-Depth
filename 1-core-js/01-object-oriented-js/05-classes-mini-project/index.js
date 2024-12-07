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
      return 'Deposit successful!'
    } else {
      console.log('Cannot deposit a negative number')
      return 'Deposit failed!'
    }
  }
}

let account1 = new BankAccount('Bob', '1234567890', 25)
console.log(account1)
console.log(account1.deposit(78.32))
console.log(account1)
console.log(account1.deposit(-378.67))
console.log(account1)
console.log(account1.deposit(38.93))
