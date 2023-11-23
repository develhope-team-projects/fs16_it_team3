import "../style/Card.css"

const Card = ({ img, title, prevPrice, newPrice, cart, setCart, id }) => {
  function addToCart(event) {
    event.preventDefault();

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

  return (
    <>
      <div className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-price">
            <div className="price">
               
              Prezzo: <del>{prevPrice}€</del>  {newPrice}€ <a href=""><img name = {title} data-prevprice = {prevPrice} data-price={newPrice} data-id = {id} data-img = {img}  onClick={addToCart} src = "src\assets\cart-plus-svgrepo-com.svg" alt="My Happy SVG"/></a>
              
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Card;
