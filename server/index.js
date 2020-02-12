const dotenv = require("dotenv").config()
const express = require("express")
const cont = require("./controller")
const massive = require("massive")
const app = express()

app.use(express.json())

const {CONNECTION_STRING}=process.env

massive(CONNECTION_STRING)
    .then(db=>{
        app.set('db',db)
        console.log("database is working")
    })
    .catch(err=>console.log(err))

app.get('/api/inventory', cont.viewInventory)
app.post('/api/inventory', cont.addInventory)
app.delete('/api/inventory/:id', cont.deleteInventory)
app.put('/api/inventory/:id', cont.updateInventory)

app.listen(4000, ()=>{
    console.log(`Server listening on 4000`)
})