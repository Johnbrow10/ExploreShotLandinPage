import React, { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./about.css";

function About() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  function handleStorage() {
    if (email !== "" && name !== "") {
      localStorage.setItem("email", email);
      localStorage.setItem("name", name);
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
    }
  }
  return (
    <div className="AboutPage">
      <header className="AboutHeader">
        <div className="banner-text">
          <h1>Entre em Contato</h1>
        </div>
        <div className="content">
          <p className="text">
            Aproveite a promoção relampago agora, cadastre seu email e receba um
            desconto de 15% nos nossos proximos serviços.
          </p>
          <form className="formulario">
            <div className="input-block">
              <label className="label">Nome</label>
              <input
                className="input"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome"
              />
            </div>
            <div className="input-block">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu Email"
              />
            </div>

            <button className="button" type="button" onClick={handleStorage}>
              Enviar
            </button>
          </form>
        </div>
      </header>
      <div class="footer-basic">
        <footer>
          <div class="social">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Johnbrow10"
            >
              <i class="icon">
                <FaGithub />
              </i>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/johnatanprogram/"
            >
              <i class="icon ">
                <FaLinkedinIn />
              </i>
            </a>
          </div>
          <p class="copyright">Explore Shot © 2021</p>
        </footer>
      </div>
    </div>
  );
}

export default About;
