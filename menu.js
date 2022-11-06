
const readline = require('readline')
const {createNewAccount, deposit, withdraw, balance, transfer} = require('./db')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to Banking App')
console.log('\n 1. Create new account')
console.log('\n 2. Deposit money')
console.log('\n 3. Withdraw money')
console.log('\n 4. Check Balance')
console.log('\n 5. Transfer money')
console.log('\n 6. Exit')

const ip = (msg) =>  {
   return new Promise((resolve, reject) => {
    rl.question(`\n ${msg} : `, (ch) => {
        resolve(ch)
    })
})
}

const start = async () => {
    while (true) {
        const choise = await ip('Enter your choise')

        if (choise == 1) {
            console.log('\n Create Account')
            const acId = parseInt(await ip('Enter account Id'))
            const acNm = await ip('Enter account name')
            const balance = 0
            createNewAccount({acId, acNm, balance})
        }
        else if (choise == 2) {
            console.log('\n Deposit Money')

            const acId = parseInt(await ip('Enter account Id'))
            const amount = parseFloat(await ip('Enter amount'))

            deposit({acId, amount}) 
        }
        else if (choise == 3) {
            console.log('\n Withdraw Money')

            const acId = parseInt(await ip('Enter account Id'))
            const amount = parseFloat(await ip('Enter amount'))

            withdraw({acId, amount}) 
    }
    else if (choise == 4) {
            console.log('\n Check Balance')
            const acId = parseInt(await ip(' Account Id'))
            balance(acId)
    }
    else if (choise == 5) {
        console.log('\n Transfer Money')
        const srcId = parseInt(await ip('Enter source account Id'))
        const destId = parseInt(await ip('Enter destination account Id'))
        const amount = parseFloat(await ip('Enter amount'))
        
        transfer({ srcId, destId, amount })
    }
    else {
        console.log('Bye Bye')
        process.exit()
    }

}

}

start()