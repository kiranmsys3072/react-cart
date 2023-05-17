import React from "react";

const Cartitem=(props)=>{
   
    // increaseQuantity=()=>{
    //    // this.state.qty+=1;
    //    // console.log(this,this.state)

    //    //setState form1
    // //    this.setState({
    // //     qty:this.state.qty+1
    // //    })

    //   //setState form2
    //   this.setState((prevState)=>{
    //     return {
    //         qty:prevState.qty+1
    //     }
            
        

    //   })

    // }

    // decreaseQuantity=()=>{
    //     const {qty}=this.state;
    //     if(qty===0){
    //         return
    //     }
    //     this.setState((prevState)=>{
    //         return {
    //             qty:prevState.qty-1
    //         }
           
    //     },()=>{
    //         // console.log(this.state)
    //     })
    //     //callback for current state
    //     console.log(this.state)
     
       
    // }
    // testing(){
      
    //         const promise=new Promise((res,rej)=>{
    //             setTimeout(()=>{
    //                 res("Done")
    //             },5000)

    //         })
    //         promise.then((res)=>{
             
    //             this.setState({qty:10})
                
    //         })

      
    // }
  
        const {title,price,qty}=props.product
       const {product,increaseQuantity,decreaseQuantity, deleteQuantity}=props
        return(
            <div className="cart-item">
                <div className="left-block">
                <img src={product.img} style={styles.image}/>
                </div>
                <div  className="right-block">
                    <div style={{color:'red'}}>{title}</div>
                    <div style={{color:'#777'}}>Rs: {price}</div>
                    <div style={{color:'#777'}}>qty: {qty}</div>

                </div>
                <div className="cart-item-actions">
                  <img  className="action-icons" alt=' ' onClick={()=>{increaseQuantity(product)}} src="https://cdn-icons-png.flaticon.com/128/992/992651.png"/>
                  <img className="action-icons" alt=' ' onClick={()=> {decreaseQuantity(product)}} src="https://cdn-icons-png.flaticon.com/128/992/992683.png"/>
                  <img className="action-icons" alt=' ' onClick={()=>{deleteQuantity(product.id)}} src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"/>
                </div>
                
            </div>
        )
    }


const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        backgroundColor:'#777'
    }
}


export default Cartitem