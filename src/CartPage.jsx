

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
            <h1>Carrello</h1>
            {cart.map(item => (
                <div key={item.id}>
                    <img style={{width: 100, }} src={item.img} alt={item.title} />
                    <p>{item.title}</p>
                    <p>{item.price}€</p>
                    <select
                        id={item.id}
                        value={item.quantity}
                        onChange={handleQuantityChange}>
                        {[...Array(10).keys()].map((num) => (
                        <option key={num + 1} value={num + 1}>{num + 1}</option>
                        ))}
                    </select>
                    <img style={{width: 20}} onClick={handleDelete} name = {item.id} src="https://cdn-icons-png.flaticon.com/512/73/73806.png" alt="" />
                </div>
      ))}
      <div >Totale: {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}€</div>
      <button>Acquista</button>
        </div>
    )
}