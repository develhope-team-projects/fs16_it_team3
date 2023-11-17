import "../style/NewsCard.css"

export const NewsCard = ({title, text, img}) => {
  return (
    <>
      <div className="newsCard">
        <img src={img} style={{ maxWidth: "100%", height: "auto" }}/>
        <div className="card__content">
          <p className="card__title">{title}</p>
          <p className="card__description">{text}</p>
        </div>
      </div>
    </>
  );
};
