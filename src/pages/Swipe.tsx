import { useState, useEffect } from "react";
import "./swipe.css";

function Swipe() {
  const [characs, setCharacs] = useState(null);
  const [index, setIndex] = useState(0);
  const [isLoved, setIsLoved] = useState(false);
  const [smth, setSmth] = useState(0);

  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((response) => response.json())
      .then((data) =>
        setCharacs(data.filter((char) => char.homeworld === "tatooine")),
      );
  }, []);

  useEffect(() => {
    if (characs) {
      setIndex((index + 1) % characs.length);
    }
  }, [smth]);

  const noNext = () => {
    setSmth((prev) => prev + 1);
    setIsLoved(false);
  };

  const yesNext = () => {
    setSmth((prev) => prev + 1);
    setIsLoved(true);
  };

  return (
    <div className="swipe-main">
      {characs ? (
        <>
          <div key={characs[index].id} className="swipe-card">
            <img src={characs[index].image} alt={characs[index].name}></img>
            <article>
              <span>{characs[index].name}</span>
            </article>
          </div>
          <button onClick={yesNext}>love</button>
          <button onClick={noNext}>X</button>

          <div className="loved">
            {isLoved ? `I like ${characs[index].name}` : ""}
          </div>
        </>
      ) : (
        <p>Loading ....</p>
      )}
    </div>
  );
}

export default Swipe;
