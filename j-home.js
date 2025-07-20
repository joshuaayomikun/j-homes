const express = require('express')
const expressHandlebars = require('express-handlebars')
const { home, about, notFound, serverError } = require('./lib/handlers')

const app = express()

const port = process.env.PORT || 3000


app.use(express.static(__dirname + '/public'))

// configure Handlebars view engine
app.engine('handlebars', expressHandlebars.engine({
	defaultLayout: 'main',
}))

app.set('view engine', 'handlebars')

app.get('/', home)
app.get('/about', about)

/// custom 404 page
app.use(notFound)
// custom 500 page
app.use(serverError)

app.listen(port, () => console.log(
	`Express started on http://localhost:${port}; ` +
	`press ctrl-c to terminate.`
))