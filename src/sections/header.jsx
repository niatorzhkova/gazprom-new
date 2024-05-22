import React from "react";

export default function Header() {
  return (
    <React.Fragment>
      {" "}
      <header className="header">
        <div className="container">
          <div className="header__logo">
            {" "}
            <img src={require("../images/logo.webp")} />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
