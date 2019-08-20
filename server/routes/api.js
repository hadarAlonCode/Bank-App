const express = require( 'express' ) //install
const router = express.Router()
const Transaction = require('../models/Transaction')

const mongoose = require('mongoose')

router.get('/transcations', function (req, res) {
    Transaction.find({}).exec(function (err, data) {
        res.send(data)
    })
})

    router.post('/transaction', function (req, res) {
        let newTransaction = new Transaction(req.body)        
        newTransaction.save()
        res.send("completed adding Transaction")
    })


module.exports = router