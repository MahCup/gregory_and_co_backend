const express = require('express')
const userRouter = require('./user')
const brandRouter = require('./brand')
const productRouter = require('./product')
const inventoryRouter = require('./inventory')

const router = express.Router()

router.get("/", (req, res) => {
    res.json({ message: "Welcome to Gregory application." });
});

router.use('/user', userRouter)
router.use('/brand', brandRouter)
router.use('/product', productRouter)
router.use('/inventory', inventoryRouter)

module.exports = router




