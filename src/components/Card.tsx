import { Link } from "react-router";
import "./Card.css";

interface CardProps {
    onCardHoverChange: (color: string | null) => void;
}

const cards = [
    {
        id: 1,
        title: "Les Rebelles du Coeur",
        description:
            "Tu veux vivre des histoires épiques, sans forcément viser le mariage impérial. Le fun, le feu et le danger, c'est ton trio préféré.",
        color: "#9D0000",
    },
    {
        id: 2,
        title: "Les gardiens du calme",
        description:
            "Tu crois au véritable amour, même à travers les étoiles. Les couples Anakin & Padmé, c'est ton mood (sans la tragédie, si possible).",
        color: "#00529A",
    },
    {
        id: 3,
        title: "Les Sages de Dagobah",
        description:
            "Tu cherches la paix, la complicité et un lien d'esprit à esprit. L'amour, c'est un équilibre dans la Force.",
        color: "#009667",
    },
    {
        id: 4,
        title: "Les Mystiques de Coruscant",
        description:
            "Tu brilles en société, aimes papoter dans les cantinas et n'as pas peur de flirter à la vitesse de la lumière",
        color: "#6E00A9",
    },
];

function Card({ onCardHoverChange }: CardProps) { 
    return (
        <div className="card-container">
            {cards.map((card) => (
                <Link
                    to="/Swipe"
                    key={card.id}
                    className="card"
                    style={{ backgroundColor: card.color }}
                    onMouseEnter={() => onCardHoverChange(card.color)}
                    onMouseLeave={() => onCardHoverChange(null)}
                >
                    <h2>{card.title}</h2>
                    <p className="card-description">{card.description}</p>
                </Link>
            ))}
        </div>
    );
}

export default Card;