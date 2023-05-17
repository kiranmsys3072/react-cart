import React from "react";
import Cartitem from "./Cartitem";


function Cart (props){
   
   const {products,increaseQuantity,decreaseQuantity,deleteQuantity}=props
  
        return (
            <div className="cart">
                {
                    products.map((product)=>{
                        return(
                            <Cartitem product={product} key={product.id}
                              increaseQuantity={increaseQuantity}
                               decreaseQuantity={decreaseQuantity}
                               deleteQuantity={deleteQuantity}
                               />
                        )
                    })
                }
               
            </div>
        )

    }


export default Cart