import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      {" "}
      <footer className="footer">
        <div className="container">
          {/* <a
            target="_blank"
            rel="noreferrer noopenner"
            href="https://rafinad.io/download-file/pravila-provedeniya-konkursa"
          >
            <p className="rules__header">Правила акции</p>
          </a> */}
          <div>
            Акция действует с 25.04.2024 по 31.05.2024. Участники: физ. лица
            (18+), граждане и резиденты РФ, у которых нет кредитных карт «МТС
            Банк»; кредитная карта «МТС Банк» оформлена на rafinad.io;
            сертификат 2500 руб. на Озон отправляет партнёр в течение 60 дней
            после выполнения участником условий акции. МТС. Информация актуальна
            на 25.04.2024. Реклама. По всем вопросам касательно отправки
            сертификата Ozon обращайтесь на {" "}
            <a href="mailto:support@rafinad.io">support@rafinad.io</a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
