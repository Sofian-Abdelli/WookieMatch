import { useEffect, useState } from "react";
import Background from "../components/Background";
import "./description.css";
import { useParams } from "react-router";
import Buttons from "../components/Buttons";
import { Link } from "react-router";
function Description(props: any) {
  const { filter } = props;
  const { id } = useParams(0);
  const [arr, setArr] = useState(null);

  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((response) => response.json())
      .then((data) =>
        setArr(data.filter((char: any) => char.homeworld === filter)),
      );
  }, []);
  return (
    <>
      <Background />
      {arr ? (
        <>
          <div className="des-main">
            <div className="des-card">
              <img src={arr[id - 1].image}></img>
            </div>
          </div>
          <div className="des-div">
            <Link to="/Swipe">
              <Buttons icon="arrow" className="retour" />
            </Link>
            <p>Name : {arr[id - 1].name}</p>
            <p>Homeworld : {arr[id - 1].homeworld}</p>
            <p>Height : {arr[id - 1].height}</p>
            <p>Gender : {arr[id - 1].gender}</p>
            <p>Specie : {arr[id - 1].species}</p>
            <p>
              Born in {arr[id - 1].born} at {arr[id - 1].bornLocation}
            </p>
          </div>
        </>
      ) : (
        <p>Loading..</p>
      )}
    </>
  );
}

export default Description;
