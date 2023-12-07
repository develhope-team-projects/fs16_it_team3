import "../style/Cart.css"

export function CartPage({cart, setCart}) {
    const handleDelete = (event) => {
        setCart(    
            cart.filter(item => item.id !== event.target.name)
        );
    };
    const handleQuantityChange = (event) => {
        
    
        setCart((prevCart) => {
            const newCart = prevCart.map(item => (
                item.id === event.target.id
                    ? { ...item, quantity: parseInt(event.target.value) }
                    : item
            ));
            return newCart;
        });
    };
    return (
        <div>
            
            <div className="cart-container">
                
                <div className="cart-elements">
                    {cart.map(item => (
                    <div className="cart-item" key={item.id}>
                        <img className="cart-img"  src={item.img} alt={item.title} />
                        <div className="cart-info">
                            <p>{item.title}</p>
                            <p className="old-price">{item.prevPrice}</p>
                            <p className="new-price">{item.price}€({item.quantity*parseFloat(item.price.replace(',', '.'))}€)</p>
                            <div className="quantity">
                                <select
                                    id={item.id}
                                    value={item.quantity}
                                    onChange={handleQuantityChange}>
                                    {[...Array(10).keys()].map((num) => (
                                    <option key={num + 1} value={num + 1}>{num + 1}</option>
                                    ))}
                                </select>
                                <img className="delete" style={{width: 20, cursor: "pointer"} } onClick={handleDelete} name = {item.id} src="https://cdn-icons-png.flaticon.com/512/73/73806.png" alt="" />
                            </div>
                            
                        </div>
                        
                        </div>
                            ))}
                </div>
            
                <div className="cart-checkout">
                    
                    <div >Totale: <div className="old-price">{cart.reduce((acc, item) => acc + parseFloat(item.prevPrice.replace(/[^\d.-]/g, ''))  * item.quantity, 0)}€</div> {cart.reduce((acc, item) => acc + parseFloat(item.price.replace(',', '.')) * item.quantity, 0).toFixed(2)}€</div>
                    <button>Acquista</button>

                    <p>
                        
                    </p>
                </div>
            </div>
      
        </div>
    )
}