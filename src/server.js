const express = require('express')
const path = require('path')

const app = express()

//set template engine
app.set('view engine', 'ejs')

//set static files
app.use(express.static(path.join(__dirname, 'views')))

//set public files
app.use(express.static(path.join(__dirname, 'public')))

//enable server to receive data by post (form)
app.use(express.urlencoded({ extended: true }))

//routes
app.get('/',(req,res) => {
    res.render('index', {
        title:'Test title'
    })
})

//404 error
app.use((req, res) => {
    res.send('Página não encontrada!')
})

//running server
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))