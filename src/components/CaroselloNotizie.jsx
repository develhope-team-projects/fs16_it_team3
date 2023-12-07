import Carousel from "react-bootstrap/Carousel";
import { NewsCard } from "../components/NewsCard";
import versaceLogo from "../assets/versaceLogo.png"
import versacePalette from "../assets/versacePalette.png"
import versaceRagazze from "../assets/versaceRagazze.jpg"
import strumentiDesign from "../assets/strumentiDesign.jpg"
import materialeFuturo from "../assets/materialeFuturo.jpg"
import arteModa from "../assets/arteModa.jpg"
import sferaStreet from "../assets/sferaStreet.png"
import formeNuove from "../assets/formeNuove.png"
import espressione from "../assets/espressione.png"

import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Carosello.css";

export const CaroselloNotizie = () => {
  return (
    <>
    <h2 style={{textAlign:"center"}}>Ultime Notizie</h2>
      <Carousel data-bs-theme="dark" style={{marginBottom:"100px"}}>
        <Carousel.Item interval={3000}>
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
            <NewsCard
              title="Un Tuffo nell'Eleganza"
              text="Esplora i dettagli intricati e i tagli audaci della nuova collezione Versace 2023, dove l'eleganza si fonde con la creatività in un connubio di stile senza confini."
              img={versaceLogo}
            />
            <NewsCard
              title="Cromatismi Iconici"
              text="Dai un'occhiata alle stampe iconiche e ai colori vivaci che definiscono la nuova collezione Versace, trasformando ogni capo in un'opera d'arte indossabile."
              img={versacePalette}
            />
            <NewsCard
              title="Stile unico, Stile tuo"
              text="La moda di Versace del 2023 celebra l'individualità, offrendo una varietà di stili per permetterti di esprimere la tua personalità attraverso il guardaroba."
              img={versaceRagazze}
            />
          </div>
          <Carousel.Caption>
            <h3 style={{ color: "black" }}>Nuova Collezione Versace 2023</h3>
            <p style={{ color: "black" }}>
              Esplora l'eleganza senza confini della nuova collezione Versace
              2023. Dalle stampe iconiche ai colori vivaci, questa collezione
              fonde creatività e stile, offrendo capi unici che trasformano ogni
              indumento in un'opera d'arte indossabile.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
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
            <NewsCard
              title="Esplorando le Frontiere del Design"
              text="Da tagli audaci a materiali innovativi, questa card esplora gli elementi che stanno guidando la moda verso nuove frontiere."
              img={strumentiDesign}
            />
            <NewsCard
              title="Moda come Arte Visiva"
              text="Da stampe uniche a design sperimentali, questa card mette in luce come la moda sta diventando sempre più un mezzo di espressione artistica."
              img={arteModa}
            />
            <NewsCard
              title="Alla Scoperta dei Tessuti del Futuro"
              text="Dai un'occhiata ai materiali di ultima generazione che stanno rivoluzionando l'industria della moda."
              img={materialeFuturo}
            />
          </div>
          <Carousel.Caption>
            <h3 style={{ color: "black" }}>Tendenze Innovatrici nel Mondo della Moda</h3>
            <p style={{ color: "black" }}>
              Immergiti nel futuro della moda. Da tagli audaci a materiali
              futuristici, esplora le tendenze che stanno ridefinendo il mondo
              del design. Questa selezione mette in evidenza l'innovazione nella
              moda.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
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
            <NewsCard
              title="Lo Streetwear che Trasmette Energia"
              text="Le ultime tendenze streetwear catturano l'energia delle strade con colori vivaci e uno stile che riflette la vitalità delle culture urbane."
              img={sferaStreet}
            />
            <NewsCard
              title="Ridefinizione delle Forme"
              text="Esplora ciò che caratterizzano le nuove tendenze streetwear, dove forme inusuali e tagli innovativi ridefiniscono i confini dello stile urbano."
              img={formeNuove}
            />
            <NewsCard
              title="Espressione di Sé"
              text="La streetwear del momento offre uno stile che va oltre l'abbigliamento, diventando un mezzo di espressione personale e di appartenenza alla cultura urbana."
              img={espressione}
            />
          </div>
          <Carousel.Caption>
            <h3 style={{ color: "black" }}>Icone della Moda che Ispirano</h3>
            <p style={{ color: "black" }}>
              Silhouette audaci, colori vibranti: scopri le tendenze che
              definiscono la cultura urbana. Una collezione che va oltre
              l'abbigliamento, esprimendo autenticità e identità. Capi che
              catturano lo spirito innovativo della moda urbana contemporanea.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
