import { Link } from "react-router";
import "./Card.css";
function Card({oui, color}) {
  return (
    <>
      <figure className={color}>
        <Link to="/Swipe">
        <h2>{oui}</h2>
        </Link>
      </figure>
    </>
  );
}

export default Card;
