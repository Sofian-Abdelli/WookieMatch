import { useState, useEffect } from "react";
import "./swipe.css";
import Background from "../components/Background";
import Buttons from "../components/Buttons";
import { Link } from "react-router";

function Swipe(props: any) {
  const { filter } = props;

  const [characs, setCharacs] = useState<any>(null);
  const [index, setIndex] = useState(0);
  const [smth, setSmth] = useState(0);
  const [loveArr, setLoveArr] = useState(() => {
    return JSON.parse(localStorage.getItem("loveArr")) || [];
  });

  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((response) => response.json())
      .then((data) =>
        setCharacs(data.filter((char: any) => char.homeworld === filter)),
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
    setLoveArr((prev: any) => [...prev, characs[index].name]);
    setSmth((prev) => prev + 1);
  };

  localStorage.setItem("loveArr", JSON.stringify(loveArr));

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
              <Link
                className="learnmore"
                to={`/Description/${characs[index].id}`}
              >
                Learn more
              </Link>
            </div>

            <Buttons icon="cross" onClick={noNext} className="heartSvg" />
            <Buttons icon="heart" onClick={yesNext} className="CrossSvg" />
            <div className="loved">
              <span>You liked :</span>
              {loveArr.map((lovedChar: any) => (
                <p key={lovedChar}>{lovedChar}</p>
              ))}
              <Buttons
                className="clearCross"
                icon="cross"
                onClick={() => {
                  localStorage.removeItem("loveArr");
                  setLoveArr((prev) => prev.slice(0, -1));
                }}
              />
            </div>
          </>
        ) : (
          <p>Loading ....</p>
        )}
      </div>
    </>
  );
}

export default Swipe;
