import React from "react";
import state from "../state";


const Product = (props) => {
  return (
  
    <div>
        {props.state.map(products => {
            return (
                <div>
                    <img src={products.imgUrl} />
                    <h3>{products.name}</h3>
                    <p>{products.description}</p>
                    <h4>{products.price}</h4>
                    <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
                </div>
            )
        })}
    </div>


  );
}

export default Product;