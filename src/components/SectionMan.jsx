import React from "react";
import Carrousel from "../components/Carrousel";
import Card from "../components/Cards";
import img1 from "../assets/img/responsive/SectionMen/bao-bao-GREEBEtyR9Y-unsplash.webp";
import img2 from "../assets/img/responsive/SectionMen/kemal-alkan-_BDBEP0ePQc-unsplash.webp";
import img3 from "../assets/img/responsive/SectionMen/irene-kredenets-dwKiHoqqxk8-unsplash.webp";
import img4 from "../assets/img/responsive/SectionMen/bao-bao-TysFvOl78u0-unsplash.webp";
import img5 from "../assets/img/responsive/SectionMen/tobias-van-schneider-DjCo6_Rr4nE-unsplash.webp";
import "../sass/components/Section.scss";

const SectionMen = () => {
  return (
    <div>
      <h2 className="title">MEN</h2>
      <Carrousel>
        <Card
          imageSrc={img1}
          description="Tayson white"
          buttonText="buy for 30 $USD"
          cardNumber={1}
          alt="img-men-1"
        />
        <Card
          imageSrc={img2}
          description="Classic jacket"
          buttonText="buy for 43 $USD"
          cardNumber={2}
          alt="img-men-2"
        />
        <Card
          imageSrc={img3}
          description="Tennis rainbow"
          buttonText="buy for 50 $USD"
          cardNumber={3}
          alt="img-men-3"
        />
        <Card
          imageSrc={img4}
          description="Waldem t-shirt"
          buttonText="buy for 21 $USD"
          cardNumber={4}
          alt="img-men-4"
        />
        <Card
          imageSrc={img5}
          description="Classic sweatter"
          buttonText="buy for 35 $USD"
          cardNumber={5}
          alt="img-men-4"
        />

        {/* Agrega más tarjetas aquí si es necesario */}
      </Carrousel>
    </div>
  );
};

export default SectionMen;
