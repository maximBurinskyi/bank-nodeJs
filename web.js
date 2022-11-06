const express = require('express');
const app = express();
const port =  3000;


const {createNewAccount, deposit, withdraw, balance, transfer} = require('./db')

app.use(express.json())


app.post('/create', (req, res) => {
    createNewAccount(req.body, (msg) => {
        res.json({ 'sts' : 'success', msg})
    })
})


app.put('/deposit', (req, res) => {
    deposit(req.body, msg => {
        res.json({'sts' : 'success', msg})
    })
})


app.put('/withdraw', (req, res) => {
    withdraw(req.body, msg => {
        res.json({'sts' :'success', msg})
   })
})

app.put('/transfer', (req, res) => {
    transfer(req.body, msg => {
        res.json({ 'sts' : 'success', msg})
    })
})

app.get('/balance/:acId', (req, res) => {
    const acId = req.params.acId;
    balance(acId, bal => {
        res.json({ bal})
    })
})



app.listen(port, () => {
    console.log(`Banking app listening on port ${port}`);
})