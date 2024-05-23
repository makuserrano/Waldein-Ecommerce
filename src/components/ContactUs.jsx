import React from "react";
import "../sass/components/ContactUs.scss";
import { MdOutlineLocalShipping } from "react-icons/md";
import { GrShop } from "react-icons/gr";
import { LiaShippingFastSolid } from "react-icons/lia";
import { CiInstagram } from "react-icons/ci";
import imgFollow from "../assets/img/responsive/seguinos-instagram.webp";
function ContactUs() {
  return (
    <div className="container">
      <div className="info">
        <div className="info__express">
          <GrShop className="info__icon" />
          <h4 className="info__text">Retiro express</h4>
          <p className="info__text__p">
            Retirá gratis en nuestras tiendas seleccionadas a partir de las 2 hs
            de efectuada la compra.
          </p>
        </div>
        <div className="info__shipping">
          <MdOutlineLocalShipping className="info__icon" />
          <h4 className="info__text"> Envío gratis</h4>
          <p className="info__text__p">
            Envío gratis a partir de $100 en compras realizadas en nuestras
            tiendas.
          </p>
        </div>
        <div className="info__express__shipping">
          <LiaShippingFastSolid className="info__icon" />
          <h4 className="info__text">Envío express</h4>
          <p className="info__text__p">
            Recibi en el dia comprando antes de las 11 hs los dias háblies. Solo
            para AMBA y Córdoba capital.
          </p>
        </div>
        <div className="info__banner">
          <img
            className="info__banner__img"
            src={imgFollow}
            alt="follow instagram"
          />
          <div className="info__banner__follow">
            <CiInstagram className="info__banner__follow__icon" />
            <p className="info__banner__follow__p">waldeinsamkeit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
