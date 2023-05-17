import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state={
        products:[
            {
                title:"TV",
                price:7999,
                qty:2,
                id:1
            },
            {
                title:"mobile",
                price:9999,
                qty:1,
                id:2
            },
            {
                title:"watch",
                price:4599,
                qty:3,
                id:3
            },
            {
                title:"powerbank",
                price:1999,
                qty:5,
                id:4
            }
        ]
    }

   
   
}
increaseQuantity=(product)=>{
    const {products}=this.state
    console.log("increase by 1",product)
    let index=products.indexOf(product)
    products[index].qty+=1

    this.setState({products:products})
    
}
decreaseQuantity=(product)=>{
    const {products}=this.state
    if(product.qty===0){
        return
    }
    // console.log("increase by 1",product)
    let index=products.indexOf(product)
    products[index].qty-=1

    this.setState({products})
    
}
deleteQuantity=(id)=>{
    const{products}=this.state
    let items=products.filter((each)=>{
        return each.id !== id
    })

    this.setState({
        products:items
    })
}

totalCount=()=>{
  const {products}=this.state
  let count=0
  products.forEach((pro)=>{
     count+=pro.qty
  })
  return count
}


  render(){
    const {products}=this.state
    return (
      <div className="App">
        <Navbar count={this.totalCount()}/>
        <Cart                 
                              increaseQuantity={this.increaseQuantity}
                               decreaseQuantity={this.decreaseQuantity}
                               deleteQuantity={this. deleteQuantity}
                               products={products}   />
      </div>
    );

  }
  
}

export default App;
