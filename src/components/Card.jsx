import "../style/Card.css"

const Card = ({ img, title, prevPrice, newPrice, cart, setCart,  }) => {
  function addToCart(event) {
    event.preventDefault();

    const existingItemIndex = cart.findIndex(item => item.title === event.target.name);

    if (existingItemIndex !== -1) {
        const updatedCart = cart.map((item, index) => {
            if (index === existingItemIndex) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });

        setCart(updatedCart);
    } else {
        setCart([...cart, { title: event.target.name, price: parseFloat(event.target.dataset.price), quantity: 1 }]);
    }
}

  return (
    <>
      <div className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-price">
            <div className="price">
               
              Prezzo: <del>{prevPrice}€</del>  {newPrice}€ <a href=""><img name = {title} data-price={newPrice}  onClick={addToCart} src = "src\assets\cart-plus-svgrepo-com.svg" alt="My Happy SVG"/></a>
              
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Card;
