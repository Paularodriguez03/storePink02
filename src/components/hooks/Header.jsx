import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return(
        <>
        <header>
        <Link to="/">
            <img src='https://scontent.fbog14-1.fna.fbcdn.net/v/t1.15752-9/150438998_265509325015958_2216055309443578634_n.jpg?_nc_cat=108&ccb=3&_nc_sid=ae9488&_nc_ohc=la5VUwGDi-kAX9JQXTE&_nc_oc=AQluNOBL_A6yuCkmJVWos3nWw42lKva8Qv97L9C9-XmnKpsPF0zpUdKbfJL5MIinyZY&_nc_ht=scontent.fbog14-1.fna&oh=467b125f6f69f91ead1a3b836fc4c56a&oe=60640BE8' className="logo" />
        </Link>
            <div className="networks">
                <a href="https://api.whatsapp.com/send?phone=573143014185&fbclid=IwAR0_yq9Czjh2viHSwi9gkqiMjFeef0gBru2f_uTnTum5o_3MlMbsWaeoJLY"><i className="fab fa-whatsapp"></i></a>
                <a href="https://www.instagram.com/storepink.li20/"><i className="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com/Li.Londono20"><i className="fab fa-facebook"></i></a>
            </div>
        </header>
        </>
    )
}

export default Header;