import React, {useState}from 'react';

//css
import '../../Css/tarjetTwo.css'

const TarjetTwo = (props) =>{

    const { product, onAdd, onRemove, cartItems} = props;

    console.log(cartItems)

    let showTotal = (new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP", maximumFractionDigits: 0}).format(product.price));
    return(
        <>
            <div className="container_one_two" key={product.id}>
                <div className="colum_one_two">
                <img src={product.Image} alt={product.name} className="circle"/>
                    <h2>{showTotal}</h2>
                </div>

                <div className="colum_two_two">
                    <h2>{product.name}</h2>
                    <p className="p">{product.sizes}</p>
                </div>

                <div className="colum_tree_two">
                    <button onClick={()=> onRemove(product)}>-</button>
                    <h5>{product.qty}</h5>
                    <button onClick={()=> onAdd(product)}>+</button>
                </div>

            </div>
        </>
    )
}

export default TarjetTwo;