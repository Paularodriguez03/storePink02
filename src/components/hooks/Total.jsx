import React from 'react'

function Total(props) {

    const { cartItems } = props;

    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

    let showTotal = (new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP", maximumFractionDigits: 0}).format(itemsPrice));

    //send of Whattsap
    let Msj='';

    //function that builds the url of whatsapp
    const waString=()=>{
        let str = '';
        //for each item in the order create a string and add that string to the string
        cartItems.forEach(item=>{
            if(item.qty!==0)
            {let subst=`${item.name}%20(${item.qty})%20subtotal:$${item.qty*item.price}%20`;
            str+=subst;}
        }   
        )
        //add string to whatsapp url
        let waS = `https://wa.me/573143014185?text=${str}`
        //replace all spaces with% 20 which is a space in the url
        waS=  waS.replace(/ /g, '%20');

        //set url with total
        Msj=`${waS}%20Total%20sin%20domicilio:%20$${showTotal}`
        //returns the url 
        return Msj;   
    }  

    console.log(Msj)
    return (
        <div className="container_total_two">
            <h3>{showTotal}</h3>
            <a href={waString()}>
            <button className="btn_total" >Ordenar
                <i className="fab fa-whatsapp" ></i>
            </button>
            </a>
        </div>
    )
}

export default Total