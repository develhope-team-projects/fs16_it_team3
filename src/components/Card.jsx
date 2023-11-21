

const Card = ({ img, title, prevPrice, newPrice }) => {
  return (
    <>
      <div className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-price">
            <div className="price">
               
              Prezzo: <del>{prevPrice}€</del>  {newPrice}€
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Card;
