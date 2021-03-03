import React from 'react';
import {Link} from "react-router-dom"

//img
import img from '../../img/logo.jpg'

//Css
import '../../Css/welcome.css'


function Start() {

    return(
        <div className="start">
            <div className="first">
                <img src={img} className="logo" />
                <h2>Bievenido a </h2>
                <h1>Store Pink</h1>
                <Link to="/home" style={{textDecoration: 'none'}}><button>!Vamos¡</button></Link>
            </div>
        </div>
    )
}

export default Start;