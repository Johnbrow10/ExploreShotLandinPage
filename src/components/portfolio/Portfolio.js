import React from "react";
import Gallery from "react-grid-gallery";
import "./portfolio.css";
import photo1 from "../../assets/locais/viagem1.jpg";
import photo2 from "../../assets/locais/viagem2.jpg";
import photo3 from "../../assets/locais/viagem3.jpg";
import photo4 from "../../assets/locais/viagem4.jpg";
import photo5 from "../../assets/locais/viagem5.jpg";
import photo6 from "../../assets/locais/viagem6.jpg";
import photo7 from "../../assets/locais/viagem7.jpeg";
import photo8 from "../../assets/locais/viagem8.jpg";
import photo9 from "../../assets/locais/viagem9.jpg";
import photo10 from "../../assets/locais/viagem10.jpg";
import photo11 from "../../assets/locais/viagem11.jpg";
import photo12 from "../../assets/locais/viagem12.jpg";
import photo13 from "../../assets/locais/viagem13.jpg";
import photo14 from "../../assets/locais/viagem14.jpg";
import photo15 from "../../assets/locais/viagem15.jpg";

function Portfolio() {
  const photos = [
    {
      src: photo1,
      thumbnail: photo1,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Fotografia da Viagem de Portugual - Algar de Benagil",
    },
    {
      src: photo2,
      thumbnail: photo2,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Fotografia da Viagem de Portugual - Algar de Benagil",
    },
    {
      src: photo3,
      thumbnail: photo3,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Fotografia da Viagem de Portugual - Algar de Benagil)",
    },
    {
      src: photo4,
      thumbnail: photo4,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Fotografia da Viagem de Portugual - Algar de Benagil",
    },
    {
      src: photo5,
      thumbnail: photo5,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Fotografia da Viagem de Portugual - Algar de Benagil",
    },
    {
      src: photo6,
      thumbnail: photo6,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption:
        "Fotografia da viagem para Pico da bandeira Brasil - Minas Gerais",
    },
    {
      src: photo7,
      thumbnail: photo7,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption:
        "Fotografia da viagem para Pico da bandeira Brasil - Minas Gerais",
    },
    {
      src: photo8,
      thumbnail: photo8,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption:
        "Fotografia da viagem para Pico da bandeira Brasil - Minas Gerais",
    },
    {
      src: photo9,
      thumbnail: photo9,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption:
        "Fotografia da viagem para Pico da bandeira Brasil - Minas Gerais",
    },
    {
      src: photo10,
      thumbnail: photo10,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption:
        "Fotografia da viagem para Pico da bandeira Brasil - Minas Gerais",
    },
    {
      src: photo11,
      thumbnail: photo11,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption:
        "Fotografia da viagem para Parque Nacional dos Lençóis Maranhenses (MA) - Brasil",
    },
    {
      src: photo12,
      thumbnail: photo12,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption:
        "Fotografia da viagem para Parque Nacional dos Lençóis Maranhenses (MA) - Brasil",
    },
    {
      src: photo13,
      thumbnail: photo13,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption:
        "Fotografia da viagem para Parque Nacional dos Lençóis Maranhenses (MA) - Brasil",
    },
    {
      src: photo14,
      thumbnail: photo14,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption:
        "Fotografia da viagem para Parque Nacional dos Lençóis Maranhenses (MA) - Brasil",
    },
    {
      src: photo15,
      thumbnail: photo15,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption:
        "Fotografia da viagem para Parque Nacional dos Lençóis Maranhenses (MA) - Brasil",
    },
  ];

  return (
    <div className="PortfolioPage">
      <header className="PortfolioHeader">
        <div className="PageTitle">
          <h1>Nosso Trabalho</h1>
        </div>
        <p className="textHeader">
          A Explore Shot trabalha exclusivamente com fotografias sobre as
          viagens dos nossos clientes. Como funciona? O cliente entra em
          contato,e os acompanhamos nas viagens, e fotografamos os melhores
          momentos da viagem. <br />
          Que são feitas, com parceria da agencia de viagens vemComigo.
        </p>

        <div className="ListPhotos">
          <hr />
          <Gallery
            images={photos}
            margin={10}
            maxRows={3}
            backdropClosesModal={true}
          />
        </div>
      </header>
    </div>
  );
}

export default Portfolio;
