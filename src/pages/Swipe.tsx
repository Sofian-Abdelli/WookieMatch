import { useState, useEffect } from "react";
import "./swipe.css";

function Swipe() {
  const [characs, setCharacs] = useState(null);

  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((response) => response.json())
      .then((data) =>
        setCharacs(data.filter((char) => char.homeworld === "tatooine")),
      );
  }, []);
  const removeLast = () => {
    setCharacs((prev) => prev.slice(0, -1));
  };

  return (
    <div className="swipe-main">
      {characs ? (
        characs.map((char) => (
          <div key={char.id} className="swipe-card-container">
            <div className="swipe-card">
              <img src={char.image} alt={char.name}></img>
              <article>
                <span>{char.name}</span>
              </article>
            </div>
          </div>
        ))
      ) : (
        <p>Loading ....</p>
      )}
      <button onClick={removeLast}>love</button>
    </div>
  );
}

export default Swipe;
