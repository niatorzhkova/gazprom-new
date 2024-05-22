import React from "react";

export default function Benefits({}) {
  return (
    <React.Fragment>
      {" "}
      <div className="benefits__section">
        <div className="container">
          <div className="main-benefits">
            <div className="benefit-item">
              <p className="benefit-item__title">25% кешбэк</p>
              <p className="u-collapse-all">
                супермаркеты, одежда, такси, АЗС, аптеки
              </p>
            </div>
            <div className="benefit-item">
              <p className="benefit-item__title">Кешбэк 1000 баллов</p>
              <p className="u-collapse-all">
                за покупки на общую сумму от 1 000 ₽
              </p>
            </div>
            <div className="benefit-item">
              <p className="benefit-item__title">17%</p>
              <p className="u-collapse-all">
                по накопительному счёту для новых клиентов
              </p>
            </div>
            <div className="benefit-item">
              <p className="benefit-item__title">0 ₽</p>
              <p className="u-collapse-all">
                выпуск карты, доставка и обслуживание
              </p>
            </div>
            <div className="benefit-item">
              <p className="benefit-item__title">Бесплатное снятие наличных</p>
              <p className="u-collapse-all">
                в банкоматах Газпромбанка и до 200 000 ₽ в месяц — в любых
                других банкоматах РФ
              </p>
            </div>
            <div className="benefit-item">
              <p className="benefit-item__title">Бесплатные переводы</p>
              <p className="u-collapse-all">
                по номеру телефона через СБП: себе из других банков —
                до 30 млн ₽, а другим людям в любые банки РФ — до 150 000 ₽
                в месяц
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
