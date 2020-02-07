require("dotenv").config()
const express = require("express")
const cont = require("./controller")
const massive = require("massive")
const app = express()

app.use(express.json())

const {CONNECTION_STRING}=process.env

massive(CONNECTION_STRING)
    .then(db=>{
        app.set('db',db)
    })
    .catch(err=>console.log(err))
const port = 4000
app.get('/api/inventory', cont.viewInventory)
app.post('/api/inventory', cont.addInventory)
app.delete('/api/inventory/:id', cont.deleteInventory)
app.put('/api/inventory/:id', cont.updateInventory)

app.listen(port, ()=>{
    console.log(`Server listening on ${port}`)
})