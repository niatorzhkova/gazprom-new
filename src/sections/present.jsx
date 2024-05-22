import React from "react";

export default function Present({}) {
  return (
    <React.Fragment>
      <div className="present__section">
        <div className="container">
          <div className="present">
            <div className="present__left">
              <h2 class="ui-caption how-to-get__title heading">
                Универсальная подарочная карта Giftery Сard
              </h2>
              <p className="standard-text">
                Это электронная карта, которую держатель может обменять
                на подарочные карты из 300 разных брендов сразу или частями.
                Получатель сам выбирает бренды и суммы обмена в рамках номинала
              </p>
            </div>
            <div className="present__right">
              <img src={require("../images/present-pic.webp")} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
