import React from "react";
import "./home.css";
import Logo from "../../assets/logo.png";

function Home() {
  return (
    <div className="HomePage">
      <header className="HomeHeader">
        <img className="logo" src={Logo} alt="Logo da aplicação" />
      </header>
    </div>
  );
}

export default Home;
