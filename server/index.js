require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const app = express()
const authCtrl = require('./controllers/authController')


const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
app.use(express.json())

app.post('/api/auth/register', authCtrl.register)
app.post('/api/auth/login', authCtrl.login)
app.delete('/api/auth/logout', auth.logout)
app.get('/api/auth/getUser', authCtrl.getUser)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
    },
}).then((dbInstance) => {
    app.set("db", dbInstance)
    console.log("DB READY")
    app.listen(SERVER_PORT, () => {
        console.log(`Listening on ${SERVER_PORT}`)
    })
})


