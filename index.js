const express = require('express')

const app = express()
const db = require('./models')
const postroute = require('./routes/Post')

app.use(express.json())
app.use('/post',postroute)
db.sequelize.sync().then(()=>{
    app.listen(3002,()=>{
        console.log("lisenting...")
    })

})