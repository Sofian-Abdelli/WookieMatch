import { useState, useEffect } from "react";
import "./swipe.css";

function Swipe() {
  const [characs, setCharacs] = useState(null);
  const [tatooine, setTatooine] = useState(null);

  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((response) => response.json())
      .then((data) => setCharacs(data));
  }, []);

  return (
    <div className="swipe-main">
      {characs ? (
        characs.map((char) => (
          <div className="swipe-card" key={char.id}>
            <img src={char.image} alt={char.name}></img>
            <article>
              <span>{char.name}</span>
              <span>{char.homeworld}</span>
            </article>
          </div>
        ))
      ) : (
        <p>nothing</p>
      )}
    </div>
  );
}

export default Swipe;
