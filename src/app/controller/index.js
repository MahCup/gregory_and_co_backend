const express = require('express')
const userRouter = require('./user')
const brandRouter = require('./brand')

const router = express.Router()

router.get("/", (req, res) => {
    res.json({ message: "Welcome to Gregory application." });
});

router.use('/user', userRouter)
router.use('/brand', brandRouter)

module.exports = router




