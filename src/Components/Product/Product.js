import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        const { name, price, imgURL} = this.props
        return (
            <div>
                {name}
                {price}
                <img src={imgURL}/>
            </div>
        )
    }
}
