import React, { Component } from 'react'
import axios from 'axios'

export default class Form extends Component {
    constructor(){
        super()
        this.state ={
            name: '',
            price: '',
            img: '',
            id: 0
        }
        this.setChange = this.setChange.bind(this)
        this.stateClear = this.stateClear.bind(this)
        this.postRequest = this.postRequest.bind(this)
    }
    setChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    stateClear(){
        this.setState({name:'', price: '', img: ''})
    }
    postRequest(){
        axios
            .post('/api/inventory', this.state)
            .then(res => this.props.getRequest(res.data))
            .catch(err => console.log(err))
        this.stateClear()
        console.log(this.state)
    }
    updateRequest(){
        axios
            .put(`/api/inventory/${this.state.id}`, this.state)
            .then(res = this.props.getRequest(res.data))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <input 
                    name="name"
                    onChange={this.setChange}/>
                <input 
                    name="price"
                    onChange={this.setChange}/>
                <input 
                    name="img"
                    onChange={this.setChange}/>
                <button onClick={this.postRequest}>Add</button>
                <button onClick={this.stateClear}>Cancel</button>
            </div>
        )
    }
}
