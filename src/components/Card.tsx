import { Link } from "react-router";
import "./Card.css";
const card = [
  {
    id: "Les Rebelles du Coeur",
    description: "Passionés du coté lumineux (ou presque)",
    fruitImage: <img src="" alt="" />,
    symbole: "Coeur flamboyant",
  },
  {
    id: "Les gardiens du calme",
    description: "Tu crois en la connexion spirituelle plus qu'en le 'swipe'",
    fruitImage: <img src="" alt="" />,
    symbole: "Impuslsif",
  },
  {
    id: "Les Sages de Dagobah",
    description: "Les calmes, drôles et profonds",
    fruitImage: <img src="" alt="" />,
    symbole: "Feuille de Force",
  },
  {
    id: "Les Mystique de Coruscant",
    description: "Les sophistiqués, sensibles",
    fruitImage: <img src="" alt="" />,
    symbole: "Sabre Violet",
  },
];

function Card() {
  return (
    <>
      <figure className="card">
        <Link to="/Swipe">
        
        </Link>
      </figure>
    </>
  );
}

export default Card;
