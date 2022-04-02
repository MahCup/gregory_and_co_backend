const express = require('express')
const adressRouter = require('./adress')
const brandRouter = require('./brand')
const inventoryRouter = require('./inventory')
const itemRouter = require('./item')
const orderRouter = require('./order')
const productRouter = require('./product')
const userRouter = require('./user')

const router = express.Router()

router.get("/", (req, res) => {
    res.json({ message: "Welcome to Gregory application." });
});

router.use('/adress', adressRouter)
router.use('/brand', brandRouter)
router.use('/inventory', inventoryRouter)
router.use('/item', itemRouter)
router.use('/order', orderRouter)
router.use('/product', productRouter)
router.use('/user', userRouter)

module.exports = router




