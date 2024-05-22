import React from "react";

export default function Hero() {
  return (
    <React.Fragment>
      {" "}
      <div className="container">
        <div className="main-banner">
          <div className=" main-banner-container">
            <div className="main-banner__content">
              <div>
                <h1 className="ui-caption main-banner__title">
                  Дебетовая карта «Мир»
                </h1>
                <p className="hero__text standard-text">
                  Оформите карту и получите кешбэк 1000 баллов от Газпромбанка
                  и сертификат на 1 000 ₽ в Giftery!
                </p>
              </div>
              <div>
                <a className="main-banner__button ui-button" href="#form">
                  Оформить карту
                </a>
              </div>
            </div>
            <div className="main-banner__img">
              <img src={require("../images/hero-pic.webp")} />
            </div>
            <a className="main-banner__button--mobile ui-button" href="#form">
              Оформить карту
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
