import React, { useState } from "react";
import "../style/ProductDetail.css";
import { useParams } from "react-router-dom";
import products from "./db/completo";
import AddToCartMessage from "./AddToCartMessage";

const ProductDetail = ({cart, setCart}) => {
  const [message, setMessage] = useState(false);
  function addToCart(event) {
    
    event.preventDefault();
   
    setMessage(true);
    
    
    setTimeout(() => {
      setMessage(false);
    }, 1000);
     
    const existingItemIndex = cart.findIndex(item => item.id === event.target.dataset.id);

    if (existingItemIndex !== -1) {
        const updatedCart = cart.map((item, index) => {
            if (index === existingItemIndex) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });

        setCart(updatedCart);
    } else {
        setCart([...cart, { id: event.target.dataset.id, title: event.target.name, img: event.target.dataset.img, prevPrice: event.target.dataset.prevprice,  price: event.target.dataset.price, quantity: 1 }]);
    }
}

  const { id } = useParams();

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return (
      <div>
        <h2>Product not found</h2>
      </div>
    );
  }
  return (
    <div>
      {message && <AddToCartMessage />}
      <div className="productdisplay">
        <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            <img src={product.img} alt="" />
            <img src={product.img} alt="" />
            <img src={product.img} alt="" />
            <img src={product.img} alt="" />
          </div>
          <div className="productdisplay-img">
            <img className="productdisplay-main-img" src={product.img} alt="" />
          </div>
        </div>
        <div className="productdisplay-right">
          <h1>{product.title}</h1>

          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
              €{product.prevPrice}
            </div>
            <div className="productdisplay-right-price-new">
              €{product.newPrice}
            </div>
          </div>
          <div className="productdisplay-right-description">
            L'icona del basket anni Ottanta torna in auge con dettagli classici
            e uno stile rétro. Questa scarpa riporta lo stile vintage in città,
            con un morbido collare a taglio basso che ti accompagna ovunque nel
            massimo comfort.
          </div>
          <div className="productdisplay-right-size">
            <h1>Seleziona taglia</h1>
            <div className="productdisplay-right-sizes">
              <div>XS</div>
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button 
            
            data-id={product.id}
            name={product.title}
            data-img={product.img}
            data-prevprice={product.prevPrice}
            data-price={product.newPrice}
            onClick={addToCart}
          >
            Aggiungi al carrello
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
