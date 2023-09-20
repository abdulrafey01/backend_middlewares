const express = require('express');
const cors = require('cors');
const { urlCheck } = require('./middleware/urlCheck');
const { checkSession } = require("./middleware/checkSession")
const {storeUser} = require("./middleware/storeUser")
const {tracertCommand} = require("./middleware/tracert")
const {checkBrowser} = require("./middleware/checkBrowser")

const app = express();
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/getdata',urlCheck, async (req, res) => {

    res.send({
        msg:"This is from getdata api",
        url:  req.get('origin')
    });

})

app.post('/signin', storeUser, (req, res) => {
    const { userName } = req.body

    res.send({
        msg: `Welcome ${userName}`
    })
})

app.post('/signout', checkSession, (req, res) => {
    const { userName } = req.body
    res.send({
        msg: `GoodBye ${userName}`
    })
})


app.get('/tracert', tracertCommand , (req, res) => {
    res.send("Check Console To See Tracert Results")
})

app.get('/getbrowser',checkBrowser, (req, res) => {
    res.send("Check Console To See Browser Info")
})

app.listen(4000, () => {
    console.log('Listening on port 4000');
})