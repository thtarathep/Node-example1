const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use('/static', express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/th-tarathep', (req, res) => {
    res.send('Tarathep!')
})
app.get('/new', (req, res) => {
    res.send('Newp!')
})

app.get('/new/a', (req, res) => {
    res.send('Newp A!')
})

app.get('/new/b', (req, res) => {
    res.send('Newp B!')
})

app.get('/k', (req, res) => {
    res.send('Kill!')
})

app.get('/json/data', (req, res) => {
    res.json({
        data: {
            name: "ABC",
            ages: 23
        }
    })
})

app.post('/cal/prices', (req, res) => {
    console.log("Called from Frontend")
    const body = req.body
    console.log(body)
    const ticket = body.ticket
    const prices = parseInt(ticket)*50
    console.log(prices)
    res.json({prices: prices})
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})