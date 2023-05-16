import React from "react";

class Cartitem extends React.Component{
    render(){
        return(
            <div className="cart-item">
                <div className="left-block">
     <img  style={styles.image}/>
                </div>
                <div  className="right-block">
                    <div style={{color:'red'}}>Phone</div>
                    <div style={{color:'#777'}}>5999</div>
                    <div style={{color:'#777'}}>qty: 1</div>

                </div>
                <div className="action-icons">
                    { /* buttons*/}

                </div>
                
            </div>
        )
    }
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