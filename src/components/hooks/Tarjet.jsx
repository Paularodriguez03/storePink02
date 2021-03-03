import React, {useState}from 'react';

//css
import '../../Css/tarjet.css'

const Tarjet = (props) =>{

    const { product, onAdd, cartItems} = props;

    let showTotal = (new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP", maximumFractionDigits: 0}).format(product.price));
    

    return(
        <>
             <div className="container-one">
            <div className="colum_one">
            <img src={product.Image} alt={product.name} className="circle"/>
                <h2>{showTotal}</h2>
            </div>

            <div className="colum_two">
                <h2>{product.name}</h2>
                <p>{product.sizes}</p>
            </div>

            <div className="colum_four">
                <button onClick={() => onAdd(product)}>Agregar</button>
            </div>


        </div>
        </>
    )
}

export default Tarjet;