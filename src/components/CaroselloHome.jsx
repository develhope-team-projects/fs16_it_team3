import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Carosello.css";
import Logo from "../assets/Logo3.png";
import img1 from "../assets/img-carosello/product_6.png"
import img2 from "../assets/img-carosello/product_20.png"
import img3 from "../assets/img-carosello/product_25.png"
import img4 from "../assets/img-carosello/product_36.png"
import img5 from "../assets/img-carosello/product_53.png"
import img6 from "../assets/img-carosello/product_70.png"
import img7 from "../assets/img-carosello/product_37.png"
import img8 from "../assets/img-carosello/product_48.png"
import img9 from "../assets/img-carosello/product_90.png"

export const CaroselloHome = () => {
  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item interval={10000}>
          <div
            style={{
              display: "flex",
              marginBottom: "150px",
              marginTop: "20px",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "-125px",
            }}
          >
            <a href="/product/6" className="caroselloCard">
              <img src={img1} style={{ borderRadius:"10px", maxHeight:"256px" }} />
            </a>
            <a href="/product/36" className="caroselloCard">
              <img src={img4} style={{ borderRadius:"10px", maxHeight:"256px" }} />
            </a>
            <a href="/product/90" className="caroselloCard">
              <img src={img9} style={{ borderRadius:"10px", maxHeight:"256px" }} />
            </a>
          </div>
          <Carousel.Caption>
            <h3 style={{ color: "black", fontSize:"25px", fontWeight:"bolder" }}>Prodotti in Sconto</h3>
            <p style={{ color: "black" }}>
              Scopri le offerte imperdibili! Sconti speciali su prodotti
              selezionati per un tempo limitato.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div
            style={{
              display: "flex",
              marginBottom: "150px",
              marginTop: "20px",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "-125px",
            }}
          >
            <a href="/product/53" className="caroselloCard">
              <img src={img5} style={{ borderRadius:"10px", maxHeight:"256px" }} />
            </a>
            <a href="/product/20" className="caroselloCard">
              <img src={img2} style={{ borderRadius:"10px", maxHeight:"256px" }} />
            </a>
            <a href="/product/48" className="caroselloCard">
              <img src={img8} style={{ borderRadius:"10px", maxHeight:"256px" }} />
            </a>
          </div>
          <Carousel.Caption>
          <h3 style={{ color: "black", fontSize:"25px", fontWeight:"bolder" }}>Nuovi Arrivi</h3>
            <p style={{ color: "black" }}>
              Le ultime novità sono arrivate! Scopri i nostri nuovi arrivi e
              aggiungi stile alla tua collezione.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div
            style={{
              display: "flex",
              marginBottom: "150px",
              marginTop: "20px",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "-125px",
            }}
          >
            <a href="/product/25" className="caroselloCard">
              <img src={img3} style={{ borderRadius:"10px", maxHeight:"256px" }} />
            </a>
            <a href="/product/70" className="caroselloCard">
              <img src={img6} style={{ borderRadius:"10px", maxHeight:"256px" }} />
            </a>
            <a href="/product/37" className="caroselloCard">
              <img src={img7} style={{ borderRadius:"10px", maxHeight:"256px" }} />
            </a>
          </div>
          <Carousel.Caption>
          <h3 style={{ color: "black", fontSize:"25px", fontWeight:"bolder" }}>Best Seller</h3>
            <p style={{ color: "black" }}>
              Esplora i prodotti che stanno conquistando il cuore dei nostri
              clienti. Affrettati prima che finiscano!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
