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
          buttonText="buy for 30 $USD"
          cardNumber={1}
        />
        <Card
          imageSrc={img2}
          description="blazer grey"
          buttonText="buy for 79 $USD"
          cardNumber={2}
        />
        <Card
          imageSrc={img3}
          description="Bolso Fendi"
          buttonText="buy for 60 $USD"
          cardNumber={3}
        />
        <Card
          imageSrc={img4}
          description="Blazer cream"
          buttonText="buy for 58 $USD"
          cardNumber={4}
        />
        <Card
          imageSrc={img5}
          description="Classic sweatter"
          buttonText="buy for 35 $USD"
          cardNumber={5}
        />
        <Card
          imageSrc={img6}
          description="Classic jacket"
          buttonText="buy for 40 $USD"
          cardNumber={6}
        />

        {/* Agrega más tarjetas aquí si es necesario */}
      </Carrousel>
    </div>
  );
};

export default SectionWoman;
