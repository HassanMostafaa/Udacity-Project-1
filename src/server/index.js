const express = require('express')
const app = express()
const fakeAPI = require('./fakeAPI.js')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()
var path = require('path')
const cors = require('cors')
const fetch = require('node-fetch')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

const key = process.env.API_KEY
const apiProvider = 'https://api.meaningcloud.com/sentiment-2.1'
// app.use(express.static(__dirname + '../../dist'))
app.use(express.static(__dirname + '/src/client'))

app.get('/', function (req, res) {
    // res.sendFile('../../dist/index.html')
    res.sendFile(path.resolve('./src/client/views/index.html'))
})

app.post('/add-url', (req, res) => {
    try {
        const url = req.body.url
        const fullURL = `${apiProvider}?key=${key}&url=${url}&lang=en`
        fetch(fullURL)
            .then((response) => response.json())
            .then((data) => {
                if (data.status.code == 212) {
                    const errMsg = { errMsg: data.status.msg, code: data.status.code }
                    res.send(errMsg)
                } else {
                    const sample = {
                        text: data.sentence_list[0].text,
                        score_tag: data.score_tag,
                        agreement: data.agreement,
                        subjectivity: data.subjectivity,
                        confidence: data.confidence,
                        irony: data.irony,
                        code: data.status.code,
                        errMsg: data.status.msg
                    }
                    res.send(sample)
                }
            })
            .catch((err) => console.log(err.message))
    } catch (err) {
        console.log(err)
    }
})

app.get('/fakeAPItest', function (req, res) {
    res.status(200).json(fakeAPI)
})

app.post('/serverTest', (req, res) => {
    res.sendStatus(200)
})

module.exports = app
