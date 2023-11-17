import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Carosello.css"
import Logo from "../assets/Logo3.png";

export const Carosello = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={2000}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              marginBottom: "150px",
              marginTop: "20px",
              gap: "30px",
            }}>
            <a href="www.facebook.com" className="caroselloCard">
              <img src={Logo} style={{ width: "256px" }} />
            </a>
            <a href="www.instagram.com" className="caroselloCard">
              <img src={Logo} style={{ width: "256px" }} />
            </a>
            <a href="www.ciao.com" className="caroselloCard">
              <img src={Logo} style={{ width: "256px" }} />
            </a>
            <a href="www.ciao.com" className="caroselloCard">
              <img src={Logo} style={{ width: "256px" }} />
            </a>
          </div>
          <Carousel.Caption>
            <h3 style={{ color: "black" }}>Prodotti in Sconto</h3>
            <p style={{ color: "black" }}>
              Scopri le offerte imperdibili! Sconti speciali su prodotti
              selezionati per un tempo limitato.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              marginBottom: "150px",
              marginTop: "20px",
              gap: "30px",
            }}
          >
            <a href="www.facebook.com" className="caroselloCard">
              <img src={Logo} style={{ width: "256px" }} />
            </a>
            <a href="www.instagram.com" className="caroselloCard">
              <img src={Logo} style={{ width: "256px" }} />
            </a>
            <a href="www.ciao.com" className="caroselloCard">
              <img src={Logo} style={{ width: "256px" }} />
            </a>
            <a href="www.ciao.com" className="caroselloCard">
              <img src={Logo} style={{ width: "256px" }} />
            </a>
          </div>
          <Carousel.Caption>
            <h3 style={{ color: "black" }}>Nuovi Arrivi</h3>
            <p style={{ color: "black" }}>
              Le ultime novità sono arrivate! Scopri i nostri nuovi arrivi e
              aggiungi stile alla tua collezione.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              marginBottom: "150px",
              marginTop: "20px",
              gap: "30px",
            }}
          >
            <a href="www.facebook.com" className="caroselloCard">
              <img src={Logo} style={{ width: "256px" }} />
            </a>
            <a href="www.instagram.com" className="caroselloCard">
              <img src={Logo} style={{ width: "256px" }} />
            </a>
            <a href="www.ciao.com" className="caroselloCard">
              <img src={Logo} style={{ width: "256px" }} />
            </a>
            <a href="www.ciao.com" className="caroselloCard">
              <img src={Logo} style={{ width: "256px" }} />
            </a>
          </div>
          <Carousel.Caption>
            <h3 style={{ color: "black" }}>Best Seller</h3>
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
