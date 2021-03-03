import React, {useState} from 'react';
import { Link } from "react-router-dom";

//components
import Header from '../hooks/Header';
import Tarjet from '../hooks/Tarjet';
import TarjetTwo from '../hooks/Tarjet-two';
import Total from '../hooks/Total';
import Data from '../../Data';

//css
import '../../Css/Home.css'
import '../../Css/Order.css'



function Home() {

    const {Products, Shirt, Necklace, Bracelet, Anklet} = Data;

    const [status, setStatus] = useState(0);

    const  ShirtCategory = () => {
        setStatus(0);
    } 

    const  NecklaceCategory = () => {
        setStatus(1);
    } 

    const  BraceletCategory = () => {
        setStatus(2);
    } 

    const  AnkletCategory = () => {
        setStatus(3);
    } 

    const  Order = () => {
        setStatus(4);
    } 
    
    //shopping cart
    const [cartItems, setCartItems] = useState([]);



    //add to cart
    const onAdd = (product) => {

        const Exist = cartItems.find(x => x.id === product.id);
        if (Exist) {
            setCartItems(cartItems.map(x => x.id === product.id?
                {...Exist, qty: Exist.qty +1} : x))
        } else {
            setCartItems([...cartItems, {...product, qty: 1}])
        } 
    }
    console.log(cartItems)

    //remove to cart
    const onRemove = (product) => {

        const exist = cartItems.find((x) => x.id === product.id);
    
        if(exist.qty === 1) {
          setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
          setCartItems(cartItems.map(x => x.id === product.id ? 
            {...exist, qty: exist.qty - 1} : x));
        }
    }
   

    return(
        <>
            {(status < 4)?
                <>
                <Header />
                <div className="Categories">
                    <h2>Categorias</h2>
                    <div className="container">
                        <ul>
                            <li><button onClick={ShirtCategory}>Camisas</button></li>
                            <li><button onClick={NecklaceCategory}>Collares</button></li>
                            <li><button onClick={BraceletCategory}>Pulseras</button></li>
                            <li><button onClick={AnkletCategory}>Tobilleras</button></li>
                        </ul>
                    </div>
                </div>
                <div className="menu">
                {(status === 0) ? 
                            Shirt.map((product) => {
                                return (
                                        <Tarjet
                                            key={product.id}
                                            product={product}

                                            onAdd={onAdd}
                                        />
                                
                                )
                                    
                            }) : ''    
                        }
                        
                        {(status === 1) ? 
                            Necklace.map((product) => {
                                return (
                                        <Tarjet 
                                            key={product.id}
                                            product={product}

                                            cartItems={cartItems}
                                            onAdd={onAdd}
                                        />
                                )
                                    
                            }) : ''    
                        }

                    {(status === 2) ? 
                        Bracelet.map((product) => {
                            return (
                                    <Tarjet 
                                        key={product.id}
                                        product={product}

                                        onAdd={onAdd}
                                    />
                            )
                                
                        }) : ''    
                    }

                    {(status === 3) ? 
                        Anklet.map((product) => {
                            return (
                                    <Tarjet 
                                        key={product.id}
                                        product={product}

                                        countCartItems ={cartItems.length}
                                        cartItems={cartItems}
                                        onAdd={onAdd}
                                    />
                            )
                                
                        }) : ''    
                    }
            </div>


            <div className="container_total">
            <h2 className="text">Total:</h2>
                <Total cartItems={cartItems} />
                <button className="Order" onClick = {Order}>
                    Guardar
                    <i className="fas fa-shopping-cart"></i>
                </button>
            </div>

                </>: ''
            }
            
            {(status === 4)?
               <>
               <div className="header">
                <div>
                        <button className="behind" onClick={ShirtCategory}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                </div>
                <Link to="/">
                    <img src='https://scontent.fbog14-1.fna.fbcdn.net/v/t1.15752-9/150438998_265509325015958_2216055309443578634_n.jpg?_nc_cat=108&ccb=3&_nc_sid=ae9488&_nc_ohc=la5VUwGDi-kAX9JQXTE&_nc_oc=AQluNOBL_A6yuCkmJVWos3nWw42lKva8Qv97L9C9-XmnKpsPF0zpUdKbfJL5MIinyZY&_nc_ht=scontent.fbog14-1.fna&oh=467b125f6f69f91ead1a3b836fc4c56a&oe=60640BE8' className="logo" />
                </Link>
                    
                </div> 
                <div className="categories_two">
                {cartItems.length === 0 && <h4>No has agregado productos</h4>}
                <p className="P">Recuerde verificar su pedido</p>
                </div>
               <div className="menu_two">
                {cartItems.map((product) => {
                                return (
                                        <TarjetTwo
                                            key={product.id}
                                            product={product}

                                            onAdd={onAdd}
                                            onRemove={onRemove}
                                            cartItems={cartItems}
                                        />
                                
                                )
                                    
                            }) }
                </div>

                <div className="container_total_two">
                    <h2 className="text_two">Total:</h2>
                    <Total cartItems={cartItems} />
                </div>
               </>
                : ''}
           
            
        </>
    )
}

export default Home;