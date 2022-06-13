/*
*Application main codebase
*/
const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

app.get('/video', (req, res) => {
 res.sendFile('assets/sample.mp4' ,{root: __dirname})
})

app.listen(4000, ()=> {
 console.log('Listening on port 4000!')
})