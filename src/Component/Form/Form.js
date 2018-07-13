import React, {Component} from 'react';
import axios from 'axios';


class Form extends Component {
    constructor(){
        super()

        this.state ={
            name: '',
            price: '',
            image: ''
        }
    this.handleCancel=this.handleCancel.bind(this);
    this.createProduct=this.createProduct.bind(this);
    }

    createProduct(){
        let {name, price, image} = this.state;
        if(name){
            let product = {
                name,
                price: this.state.price,
                image
            }
            axios.post('/api/product').then(results => {
                this.props.getInventory();
                this.handleCancel();
            }).catch(err => console.log("it aint working", err))
        }else {
            console.log("Name Missing")
        }
    }

    handleInput1(val){
        this.setState({
          name: val
        })
      }
    
      handleInput2(val){
        this.setState({
          price: val
        })
      }
    
      handleInput3(val){
        this.setState({
          image: val
        })
      }
    
    
      handleCancel(){
        this.setState({
          name: '',
          price: '',
          image: ''
        })
      }

render(){
    return(
        <div className="form">
            <div className="input-container">
                <input placeholder="name" value={this.state.name} onChange={e => this.handleInput1(e.target.value)} type="text"/>
                <input placeholder="price" value={this.state.price} onChange={e => this.handleInput2(e.target.value)} type="text"/>
                <input placeholder="image" value={this.state.image} onChange={e => this.handleInput3(e.target.value)} type="text"/>
            </div>
            <div className="button-container">
                <button onClick={this.handleCancel}>Cancel</button>
                <button onClick={this.createProduct}>Add to Inventory</button>
            </div>
        </div>
    )
}

}


export default Form;