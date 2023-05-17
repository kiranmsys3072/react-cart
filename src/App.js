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
                id:1,
                img:"https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            },
            {
                title:"mobile",
                price:9999,
                qty:1,
                id:2,
                img:"https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            },
            {
                title:"watch",
                price:4599,
                qty:3,
                id:3,
                img:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            },
            {
                title:"powerbank",
                price:1999,
                qty:5,
                id:4,
                img:"https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
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

totalPrice=()=>{
  const {products}=this.state
let price=0;
products.map((pro)=>{
  price=price+pro.qty*pro.price
})
return price
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

                               <div >Total Price : <span style={{color:"red",paddingRight:30}}>{this.totalPrice()}</span></div>
      </div>
    );

  }
  
}

export default App;
