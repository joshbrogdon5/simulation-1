module.exports = {
    getAll: (req,res,next) => {
        const dbInstance = req.app.get('db')

        dbInstance.get_inventory()
            .then(products => res.status(200).send(products))
            .catch(err => {
                res.status(500).send({errorMessage:"Oops! Something went wrong!"})
                console.log(err)
            })
    },
    create: (req,res,next) => {
        const dbInstance = req.app.get('db')

        dbInstance.create_product()
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({errorMessage:"Oops! Something went wrong!"})
                console.log(err)
            })
    },
    delete: (req,res,next) => {
        const dbInstance = req.app.get('db')

        dbInstance.delete_products()
            .then(() => res.status(200).send("Successfully Removed"))
            .catch(err => {
                res.status(500).send({errorMessage:"Oops! Something went wrong!"})
                console.log(err)
            })
    }
}