import React, {useState} from 'react';
import Tarjet from '../hooks/Tarjet'

//css
import '../../Css/Order.css'

function order(props) {

    const {CartItems} = props;

    //punto de mil
//     let showTotal = (new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP", maximumFractionDigits: 0}).format(total));
    
//     if (showTotal.length===6){
//         let totalStr = showTotal.toString();
//        let firstStr = totalStr.substring(0,3);
//        showTotal= firstStr +"." +totalStr.substring(3)
//        console.log(total)
//    }

    
    return(
        <>
         {/* <div className="header">
            <div>
                <Link to="/home" style={{textDecoration: 'none'}}>
                    <button className="behind">
                        <i className="fas fa-chevron-left"></i>
                    </button>
                </Link>
            </div>
            <img src={img} className="logo" />
            
        </div> */}
        <div className="menu_two">
            {/* {CartItems.map((product) => {
                                return (
                                        <Tarjet
                                            key={product.id}
                                            product={product}

                                            
                                        />
                                
                                )
                                    
                            }) } */}
        </div>

        <div className="container_total">
            <h2 className="text">Total:</h2>
            <h3 className="counter">0</h3>
                <button>Ordenar
                    <i className="fas fa-shopping-cart"></i>
                </button>
        </div>
        </>
    )
}

export default order;