import smallLeft from "../assets/icons/small-left.png";
import smallRight from "../assets/icons/small-right.png";
import search from "../assets/icons/search.png";

import "./Header.css";

import { useState } from "react";

const Header = () => {
  const [searchTerm, onSearchChange] = useState("");
  return (
    <nav className="header__navigation">
      <div className="navigation">
        <button className="arrow-left">
          <img src={smallLeft} alt="Seta para esquerda" />
        </button>
        <button className="arrow-right">
          <img src={smallRight} alt="Seta para direitaa" />
        </button>

        <div className="header__search">
          <img src={search} alt="" />
          <input
            id="search-input"
            maxLength="800"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            placeholder="O que você quer ouvir?"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      <div className="header__login">
        <button className="subscribe">Inscreva-se</button>
        <button className="login">Entrar</button>
      </div>
    </nav>
  );
};

export default Header;
