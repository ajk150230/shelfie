module.exports ={
    viewInventory: (req, res, next) =>{
        const db = req.app.get('db')
        db.get_inventory()
            .then((inventory)=>res.status(200).send(inventory))
            .catch(err=>{
                res.status(500).send(console.log(err))
            })
        console.log('all good')
    },
    addInventory:(req, res) =>{
        const db = req.app.get('db')
        const { name, price, img} = req.body
        db.create_product([ name, price, img])
            .then(()=>res.sendStatus(200))
            .catch(err=>{
                res.status(500).send({error: "Something is wrong"})
            })
    },
    deleteInventory: (req, res) =>{
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_product(id)
            .then(()=> res.sendStatus(200))
            .catch(err=>{
                res.status(500).send(console.log(err))
            })
    },
    updateInventory: (req, res) =>{
        const db = req.app.get('db')

        db.update_inventory([req.params.id, req.body])
            .then(() => res.sendStatus(200))
            .catch(err=>{
                res.status(500).send(console.log(err))
            })
    }

}