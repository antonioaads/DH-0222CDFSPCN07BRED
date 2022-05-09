const products = require("../database/products.json")

const ProductController = {
    index: (req, res) => {
        return res.render('products', {products})
    },

    show: (req, res) => {
        const {slug} = req.params

        const product = products.find(product => product.slug === slug)

        if(product){
            return res.render('product', product)
        }
        else {
            res.status(404).send()
        }
        
    }
}

module.exports = ProductController