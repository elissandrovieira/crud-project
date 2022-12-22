const router = require('express').Router()

const IndexController = require('../controllers/index')
const CustomersController = require('../controllers/customers')

//routes
router.get('/', IndexController.index)

//register
router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

//list
router.get('/list', CustomersController.list)

//edit
router.get('/edit', CustomersController.formEdit)
router.post('/edit/:id', CustomersController.edit)

//remove
router.get('/remove/:id', CustomersController.remove)

module.exports = router