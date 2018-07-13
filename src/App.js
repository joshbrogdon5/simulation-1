import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard'
import Form from './Component/Form/Form'
import Header from './Component/Header/Header'
import axios from 'axios';

class App extends Component {
  constructor(){
    super()

    this.state = {
      inventoryList: []
     
    }
    this.getInventory=this.getInventory.bind(this);
  }

  componentDidMount(){
    this.getInventory();
  }

  getInventory(){
    axios.get('/api/inventory').then(results => {
      this.setState({
        inventoryList: results.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard
         inventory={this.state.inventoryList}
         getRequest={this.getInventory}/>
        <Form
        getRequest={this.getInventory} />
      </div>
    );
  }
}

export default App;
