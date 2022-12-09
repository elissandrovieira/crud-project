const router = require('express').Router()

router.get('/',(req,res) => {
    res.render('index', {
        title:'Test title'
    })
})

module.exports = router