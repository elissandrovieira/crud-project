const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')

const registerTitle = 'User registration'
const editTitle = 'Edit users'

function index(req,res) {
    res.render('register', {
        title: registerTitle
    })
}

async function add(req, res) {
    const {
        name,
        age,
        email,
        password
    } = req.body

    const passwordCrypto = await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypto
    })

    register.save()
    res.render('register', {
        title: registerTitle,
        message: 'Successful user registration.'
    })

}

async function list(req, res) {
    const users = await CustomersModel.find()

    res.render('list', {
        title:'List users',
        users
    })
}

async function formEdit(req, res) {
    const { id } = req.query

    const user = await CustomersModel.findById(id)
    res.render('edit',{
        title: editTitle,
        user
    })
    
}

async function edit(req, res) {
    const {
        name,
        age,
        email,
    } = req.body

    const { id } = req.params
    const user = await CustomersModel.findById(id)

    user.name = name
    user.age = age
    user.email = email

    user.save()

    res.render('edit', {
        title: editTitle,
        user,
        message: 'Successful user edit.'
    })
}

async function remove(req, res) {
    const { id } = req.params
    
    const remove = await CustomersModel.deleteOne({_id: id})

    if(remove.ok){
        res.redirect('/list')
    }
}

module.exports = {
    index,
    add,
    list,
    formEdit,
    edit,
    remove
}