import "./Main.css";
import { useEffect, useState } from "react";

const Main = () => {
  const [Playlists, setPlaylists] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/playlists")
      .then((response) => response.json())
      .then((data) => {
        setPlaylists(data);
      })
      .catch((error) => {
        console.log("Ero ao buscar playlists:", error);
      });
  }, []);

  return (
    <main>
      <div className="main-container">
        <div className="playlist-container">
          <div id="result-playlists">
            <div className="playlist">
              <h1 id="greeting"></h1>
              <h2 className="session">Navegar por todas as seções</h2>
            </div>

            <div className="offer__scroll-container">
              <div className="offer__list">
                <section className="offer__list-item">
                  {Playlists.map((item) => (
                    <a href="#" className="cards" key={item.id}>
                      <div className={`cards card${item.id}`}>
                        <img src={item.image} alt={item.title} />
                        <span>{item.title}</span>
                      </div>
                    </a>
                  ))}
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
