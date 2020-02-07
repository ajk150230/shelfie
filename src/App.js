import React from 'react';
import axios from 'axios'
import './App.css';
import Dashboard from "./Components/Dashboard/Dashboard"
import Form from "./Components/Form/Form"
import Header from "./Components/Header/Header"
import { HashRouter, Link } from 'react-router-dom'
import routes from "./routes"
// import Product from "./Components/Product/Product"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      inventorylist: [],
      currentproduct: []
    }
    this.getRequest = this.getRequest.bind()
  }
  getRequest() {
    axios
      .get('/api/inventory')
      .then(res => this.setState({ inventorylist: res.data }))
      .catch(err => console.log(err))
  }
  componentDidMount() {
    this.getRequest()
  }
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Dashboard
            inventorylist={this.state.inventorylist}
            getRequest={this.getRequest}
          />
          <Form
            getRequest={this.getRequest}
          />
          <Header />
        </div>
        </HashRouter>
        );
}
}
export default App;
