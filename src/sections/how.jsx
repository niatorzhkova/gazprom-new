import React, { useState, useRef, useEffect } from "react";
import { AES, enc } from "crypto-js";
import { IMaskInput } from "react-imask";

export default function How() {
  const [phoneValue, setPhoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneIsEmpty, setPhoneIsEmpty] = useState(false);
  const [phoneIsValid, setPhoneIsValid] = useState(true);
  const [emailIsEmpty, setEmailIsEmpty] = useState(false);
  const [checked, setChecked] = useState(null);
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.size === 0) {
      url.searchParams.set("aff_id", "67323");
      url.searchParams.set("offer_id", "5638");
      url.searchParams.set("p", "1709");
      url.searchParams.set("erid", "LjN8KWKhz");
      url.searchParams.set("aff_sub", "1");
      url.searchParams.set("aff_sub2", "1");
      window.history.pushState({ path: url.href }, "", url.href);
    }
  }, []);
  useEffect(() => {
    // const encryptedText = AES.encrypt(phoneValue, "rafinad");
    const url = new URL(window.location.href);
    // url.searchParams.set("aff_sub6", encryptedText);
    url.searchParams.set("aff_sub7", "cert");
    window.history.pushState({ path: url.href }, "", url.href);
  }, [phoneValue]);

  function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  function handlePhoneChange(phone) {
    const PHONE_LENGTH = 11;
    setPhoneValue(phone);
    setPhoneIsEmpty(false);

    if (phone.length < PHONE_LENGTH) {
      setPhoneIsValid(false);
    } else {
      setPhoneIsValid(true);
    }
  }

  function handleEmailChange(e) {
    setEmailValue(e.currentTarget.value);
    setEmailIsEmpty(false);
  }

  function sanitizeValue(text) {
    return (
      text
        // htmlspecialchars
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        // addslashes
        .replace(/\\/g, "\\\\")
        // eslint-disable-next-line
        .replace(/\u0008/g, "\\b")
        .replace(/\t/g, "\\t")
        .replace(/\n/g, "\\n")
        .replace(/\f/g, "\\f")
        .replace(/\r/g, "\\r")
        .replace(/'/g, "\\'")
        .replace(/"/g, '\\"')
    );
  }

  function getGetParams(url = window.location) {
    let params = {};

    new URL(url).searchParams.forEach((val, key) => {
      if (key.includes("[]")) {
        if (!params[key.replace("[]", "")]) params[key.replace("[]", "")] = [];
        if (!params[key.replace("[]", "")].includes(val))
          params[key.replace("[]", "")].push(sanitizeValue(val));
      } else {
        params[key] = sanitizeValue(val);
      }
    });
    return params;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const email = emailValue;

    if (phoneValue === "" || phoneValue === undefined) {
      setPhoneIsEmpty(true);
      return;
    } else {
      setPhoneIsEmpty(false);
    }
    if (emailValue === "") {
      setEmailIsEmpty(true);
    } else {
      setEmailIsEmpty(false);
    }
    if (!checked) {
      setChecked(false);
    }

    if (
      !phoneIsEmpty &&
      !emailIsEmpty &&
      checked &&
      isValidEmail(email) &&
      phoneIsValid
    ) {
      try {
        setIsSubmitting(true);

        window.grecaptcha.ready(function () {
          window.grecaptcha
            .execute("6LfA288nAAAAAKt8TcmpQGAdfCnCAj3C1y5_6GLg", {
              action: "regFormCaptcha",
            })
            .then(function (token) {
              let getParamsStr = window.location.search;
              const { aff_sub: click_id, aff_sub2: wm_id } = getGetParams();
              const data = {
                landing: "2",
                email: emailValue,
                phone_number: phoneValue,
                wm_id: wm_id,
                click_id: click_id,
                get_params: getParamsStr,
              };
              setError(false);
              const response = fetch(
                "https://rafinad.io/api/v1/create_landing_data/",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(data),
                }
              ).then((response) => {
                if (!response.ok) {
                  setError(true);
                  setIsSubmitting(false);
                } else {
                  setIsSubmitting(false);
                  window.location = `https://go.leadgid.ru/aff_c${getParamsStr}`;
                }
              });
            });
        });
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="how-to-get">
          <div className="how-to-get__pic">
            <img src={require("../images/present-pic.webp")} />
          </div>
          <div className="how-to-get__content">
            <h2 className="ui-caption how-to-get__title">
              Как получить сертификат?
            </h2>
            <ul className="ui-list">
              <li className="ui-list__item standard-text">
                Оставьте свой номер телефона и адрес электронной почты для того,
                чтобы получить сертификат на сумму 2000₽ на покупки в OZON
              </li>
              <li className="ui-list__item standard-text">
                С 22 апреля по 30 апреля 2024 года оформляйте кредитную карту
                «MTS CASHBACK» от МТС Банка, перейдя по ссылке после
                обязательной регистрации
              </li>
              <li className="ui-list__item standard-text">
                Оплатите картой покупки на сумму от 500₽
              </li>
              <li className="ui-list__item standard-text">
                Сертификат на Ozon придёт в SMS на указанный номер телефона
                в течение 60 дней после первой покупки на 500 ₽
              </li>
              <li className="ui-list__item standard-text">
                Важно! Вам придёт сертификат только в том случае, если в течение
                90 дней на момент оформления у вас не было других заявок
                на кредитную карту MTS CASHBACK
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="registration" id="form">
        <div className="container">
          <div className="registration__content">
            <div className="registration__form">
              <form
                className={`reg-form js-reg-form   ${
                  isSubmitting ? "pointer-events-none" : ""
                }`}
              >
                <div className="reg-form__row">
                  <div className="reg-form__field">
                    <div className="ui-input">
                      <label className="input__label ui-checkbox__text">
                        Номер телефона
                      </label>
                      <IMaskInput
                        mask={"+{7} (000) 000 00-00"}
                        radix="."
                        unmask={true}
                        ref={ref}
                        inputRef={inputRef}
                        className={`ui-input__input js-input-phone ${
                          !phoneIsEmpty && !phoneIsValid ? "red" : ""
                        }`}
                        placeholder="+7 (XXX) XXX-XX-XX"
                        value={phoneValue}
                        onAccept={handlePhoneChange}
                      />
                      {phoneIsEmpty && (
                        <span className="ui-input__error">
                          Поле обязательно для заполнения
                        </span>
                      )}
                      {!phoneIsValid && (
                        <span className="ui-input__error">
                          Введите корректный номер телефона
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="reg-form__field">
                    <div className="ui-input">
                      <label className="input__label ui-checkbox__text">
                        Адрес электронной почты
                      </label>
                      <input
                        className={`ui-input__input js-input-code ${
                          emailValue !== "" && !isValidEmail(emailValue)
                            ? "red"
                            : ""
                        }`}
                        value={emailValue}
                        onChange={handleEmailChange}
                        placeholder="example@mail.ru"
                        type="email"
                      />
                      {emailValue !== "" && !isValidEmail(emailValue) && (
                        <span className="ui-input__error">
                          Введите корректный email
                        </span>
                      )}
                      {emailIsEmpty && (
                        <span className="ui-input__error">
                          Поле обязательно для заполнения
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="ui-checkbox reg-form__agree">
                  <label className="ui-checkbox__label">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => {
                        setChecked(e.target.checked);
                      }}
                      className="js-checkbox"
                    />
                    <span className="ui-checkbox__box"></span>
                    <span className="ui-checkbox__text agree">
                      Я&nbsp;даю{" "}
                      <a
                        href="https://rafinad.io/download-file/privacy_policy"
                        target="_blank"
                        rel="noreferrer noopenner"
                      >
                        согласие
                      </a>{" "}
                      на обработку персональных данных и получение SMS-сообщений
                      от Rafinad.
                    </span>
                  </label>
                  {checked === false && (
                    <span className="ui-checkbox__error">
                      Поле обязательно для заполнения
                    </span>
                  )}
                  {error && (
                    <span className="ui-checkbox__error">
                      Произошла ошибка при отправке формы, попробуйте позднее
                    </span>
                  )}
                </div>
              </form>
              <button
                onClick={(e) => {
                  handleSubmit(e);
                }}
                type="submit"
                className={`reg-form__button ui-button ${
                  isSubmitting ? "submitting" : ""
                }  ${phoneIsEmpty ? "btn-disabled" : ""}
                          `}
              >
                Оформить карту
              </button>
            </div>
            <div className="registration__pic">
              <img src={require("../images/how-pic.webp")} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
