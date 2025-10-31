import { useState, useEffect } from "react";
import "./swipe.css";
import Background from "../components/Background";

function Swipe(props) {
  const { filter } = props;

  const [characs, setCharacs] = useState<any>(null);
  const [index, setIndex] = useState(0);
  const [smth, setSmth] = useState(0);
  const [loveArr, setLoveArr] = useState([]);

  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((response) => response.json())
      .then((data) =>
        setCharacs(data.filter((char) => char.homeworld === filter)),
      );
  }, []);

  useEffect(() => {
    if (characs) {
      setIndex((index + 1) % characs.length);
    }
  }, [smth]);

  const noNext = () => {
    setSmth((prev) => prev + 1);
  };

  const yesNext = () => {
    setLoveArr((prev) => [...prev, characs[index].name]);
    setSmth((prev) => prev + 1);
  };

  return (
    <>
      <Background />
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

            {loveArr.map((lovedChar) => (
              <p key={lovedChar}>{lovedChar}</p>
            ))}
          </>
        ) : (
          <p>Loading ....</p>
        )}
      </div>
    </>
  );
}

export default Swipe;
