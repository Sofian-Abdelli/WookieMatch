import { useState } from 'react';
import "./home.css";
import Card from "../components/Card";

function Home() {
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);

  const handleHoverChange = (color: string | null) => {
    setHoveredColor(color);
  };

  const shadowColor = hoveredColor || '#c8c8c8'; 
  const h1Style = { textShadow: `0px 10px 10px ${shadowColor}` };
  const h3Style = { textShadow: `0px 5px 5px ${shadowColor}` };

  return (
    <div className="home">
      <h1 style={h1Style}>Que la Force du flirt soit avec toi</h1>
      <h3 style={h3Style}>Choisis ton humeur</h3>
      
      <Card onCardHoverChange={handleHoverChange} />
    </div>
  );
}

export default Home;