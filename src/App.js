import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import './App.css';
import db from './firebase'
import { collection, onSnapshot, orderBy } from 'firebase/firestore';
//extra
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [
        // {
        //     title:"TV",
        //     price:7999,
        //     qty:2,
        //     id:1,
        //     img:"https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        // },
        // {
        //     title:"mobile",
        //     price:9999,
        //     qty:1,
        //     id:2,
        //     img:"https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        // },
        // {
        //     title:"watch",
        //     price:4599,
        //     qty:3,
        //     id:3,
        //     img:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        // },
        // {
        //     title:"powerbank",
        //     price:1999,
        //     qty:5,
        //     id:4,
        //     img:"https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        // }
      ],
      loading: true
    }



  }

  componentDidMount() {
    // firebase.firestore()
    // .collection('product')
    // .get().then((snapshot)=>{
    //   console.log(snapshot)

    //   snapshot.docs.map((doc)=>{
    //     console.log(doc.data())

    //     const products=snapshot.docs.map((doc)=>{
    //       const data=doc.data()
    //       data['id']=doc.id
    //       return data
    //     })
    //     this.setState({products,loading:false})
    //   })

    // })


    firebase.firestore()
      .collection('product')
      //querying
      //.where('price','>=',999)
      //.orderBy('price',"desc").limit(2)

      .onSnapshot((snapshot) => {
        console.log(snapshot)

        snapshot.docs.map((doc) => {
          console.log(doc.data())

          const products = snapshot.docs.map((doc) => {
            const data = doc.data()
            data['id'] = doc.id
            return data
          })
          this.setState({ products, loading: false })
        })

      })


  }

  // componentDidMount(){
  //   onSnapshot(collection(db,'product'),(snapshot)=>{
  //     console.log(snapshot.docs.map((doc)=> doc.data()))
  //   })
  // }

  // componentDidMount(){
  //   firebase
  //   .firestore()
  //   .collection('products')
  //   .get()
  //   .then((snapshot)=>{
  //     console.log(snapshot)
  //   })
  // }



  increaseQuantity = (product) => {
    const { products } = this.state
    console.log("increase by 1", product)
    let index = products.indexOf(product)
    // products[index].qty+=1

    // this.setState({products:products})

    const docRef = firebase.firestore()
      .collection('product').doc(products[index].id)
    docRef.update({
      qty: products[index].qty + 1
    }).then(() => {
      console.log('Updated')
    }).catch(err => {
      console.log('error:', err)
    })

  }
  decreaseQuantity = (product) => {
    const { products } = this.state
    if (product.qty === 0) {
      return
    }
    // console.log("increase by 1",product)
    let index = products.indexOf(product)
    // products[index].qty-=1

    // this.setState({products})

    //decrease quantity using firebase
    const docRef = firebase.firestore().collection('product').doc(products[index].id)
    docRef.update({
      qty: products[index].qty - 1
    }).then(() => {
      console.log('Updated')
    }).catch(err => {
      console.log('error:', err)
    })

  }
  deleteQuantity = (id) => {
    const { products } = this.state
    // let items=products.filter((each)=>{
    //     return each.id !== id
    // })

    // this.setState({
    //     products:items
    // })
    const docRef = firebase.firestore().collection('product').doc(id)
    docRef.delete().then(() => {
      console.log('Deleted successfully')
    }).catch(err => {
      console.log('error:', err)
    })
  }

  totalCount = () => {
    const { products } = this.state
    let count = 0
    products.forEach((pro) => {
      count += pro.qty
    })
    return count
  }

  totalPrice = () => {
    const { products } = this.state
    let price = 0;
    products.map((pro) => {
      price = price + pro.qty * pro.price
    })
    return price
  }

  addProduct = () => {
    return firebase.firestore()
      .collection('product')
      .add({
        img: "data:image/jpeg;base64,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",
        title: "sun glases",
        price: 59,
        qty: 5
      }).then((docQty) => {
        console.log('product has been added', docQty)
      }).catch((err) => {
        console.log('Error:', err)
      })
  }


  render() {
    //const ref=firebase.firestore().collection('products')
    //console.log(ref)
    const { products, loading } = this.state
    return (
      <div className="App">
        <Navbar count={this.totalCount()} />
        <button onClick={this.addProduct}>Add</button>
        <Cart
          increaseQuantity={this.increaseQuantity}
          decreaseQuantity={this.decreaseQuantity}
          deleteQuantity={this.deleteQuantity}
          products={products} />
        {loading && <h1>loading...</h1>}

        <div >Total Price : <span style={{ color: "red", paddingRight: 30 }}>{this.totalPrice()}</span></div>
      </div>
    );

  }

}

export default App;
