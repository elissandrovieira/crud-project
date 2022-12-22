function index(req,res) {
    res.render('index', {
        title:'Home page'
    })
}

module.exports = {
    index,
}