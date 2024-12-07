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
  withdraw(amount) {
    if (amount < this.balance) {
      this.balance -= amount
      console.log(`Your withdrawal: £${amount} New balance: £${this.balance}`)
      return 'Withdrawal successful!'
    } else {
      console.log('Cannot withdraw more than balance')
      return 'Withdrawal failed!'
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
console.log(account1)
console.log(account1.withdraw(52.79))
console.log(account1)
console.log(account1.withdraw(89.50))
console.log(account1)
console.log(account1.deposit(529.05))
console.log(account1)
console.log(account1.deposit(422.61))
console.log(account1)
console.log(account1.withdraw(507.57))
console.log(account1)
console.log(account1.deposit(949.28))
console.log(account1)
console.log(account1.withdraw(631.77))
console.log(account1)
console.log(account1.deposit(484.81))
console.log(account1)
