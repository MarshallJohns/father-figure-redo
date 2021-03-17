require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const app = express()


const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
app.use(express.json())


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