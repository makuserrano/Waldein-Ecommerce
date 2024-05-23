import React from "react";
import Carrousel from "../components/Carrousel";
import Card from "../components/Cards";
import img1 from "../assets/img/responsive/SectionWoman/img1.webp";
import img2 from "../assets/img/responsive/SectionWoman/img2.webp";
import img3 from "../assets/img/responsive/SectionWoman/img3.webp";
import img4 from "../assets/img/responsive/SectionWoman/img4.webp";
import img5 from "../assets/img/responsive/SectionWoman/img5.webp";
import img6 from "../assets/img/responsive/SectionWoman/img6.webp";

import "../sass/components/Section.scss";

const SectionWoman = () => {
  return (
    <div>
      <h2 className="title">WOMAN</h2>
      <Carrousel>
        <Card
          imageSrc={img1}
          description="Poncho white"
          buttonText="Comprar por $90.000"
          cardNumber={1}
          alt="img-woman-1"
        />
        <Card
          imageSrc={img2}
          description="blazer grey"
          buttonText="Comprar por $120.000"
          cardNumber={2}
          alt="img-woman-2"

        />
        <Card
          imageSrc={img3}
          description="Bolso Fendi"
          buttonText="Comprar por $99.000"
          cardNumber={3}
          alt="img-woman-3"

        />
        <Card
          imageSrc={img4}
          description="Blazer cream"
          buttonText="Comprar por $130.000"
          cardNumber={4}
          alt="img-woman-4"

        />
        <Card
          imageSrc={img5}
          description="Classic sweatter"
          buttonText="Comprar por $65.000"
          cardNumber={5}
          alt="img-woman-5"

        />
        <Card
          imageSrc={img6}
          description="Classic jacket"
          buttonText="Comprar por $114.000"
          cardNumber={7}
          alt="img-woman-6"

        />

        {/* Agrega más tarjetas aquí si es necesario */}
      </Carrousel>
    </div>
  );
};

export default SectionWoman;
