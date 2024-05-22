import "./App.scss";
import Header from "./sections/header";
import Hero from "./sections/hero";
import Benefits from "./sections/benefits";
import How from "./sections/how";
import Present from "./sections/present";
import Footer from "./sections/footer";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);

      if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }

      if (isScriptExist && callback) callback();
    };
    loadScriptByURL(
      "recaptcha-key",
      `https://www.google.com/recaptcha/api.js?render=6LfA288nAAAAAKt8TcmpQGAdfCnCAj3C1y5_6GLg`
    );
  }, []);
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Present />
        <How />
      </main>
      <Footer />
    </div>
  );
}

export default App;
