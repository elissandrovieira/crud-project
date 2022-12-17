const express = require('express')
const path = require('path')

const db = require('./database')
const routes = require('./routes')

const app = express()

//database conection
db.connect()

//set template engine
app.set('view engine', 'ejs')

//set static files inside src
app.set('views', path.join(__dirname, 'views'))

//set public files
app.use(express.static(path.join(__dirname, 'public')))

//enable server to receive data by post (form)
app.use(express.urlencoded({ extended: true }))

//set routes
app.use('/', routes)

//404 error
app.use((req, res) => {
    res.send('Página não encontrada!')
})

//running server
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))