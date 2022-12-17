const router = require('express').Router()

const CustomersController = require('../controllers/customers')

router.get('/',(req,res) => {
    res.render('index', {
        title:'Test title'
    })
})

router.get('/register',(req,res) => {
    res.render('register', {
        title:'Sig in'
    })
})

router.post('/register/add', CustomersController.add)

module.exports = router