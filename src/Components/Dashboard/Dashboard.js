import React, { Component } from 'react'
import Product from "../Product/Product"
export default class Dashboard extends Component {
    constructor(){
        super()
        this.deleteProduct = this.deleteProduct.bind(this)
    }
    deleteProduct(id){
        axios
            .delete(`/api/inventory/${id}`)
            .then(res => this.getRequest(res.data))
            .catch(err => console.log(err))
    }
    render() {
        const products = this.props.inventorylist.map((element=>{
            return(
                <div>
                    <Product 
                        deleteProduct={this.deleteProduct}
                        name = {element.name}
                        price = {element.price}
                        imgURL = {element.imgURL}
                    />
                </div>
            )
        })
    )
        return (
            <div>
                Dashboard
                {products}
            </div>
        )
    }
}
