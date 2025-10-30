import "./home.css";
import Card from "../components/Card";
function Home() {
  return (
    <>
      <div className="home">
        <h1>Que la Force du flirt soit avec toi</h1>
        <h3>Choisie ton humeur</h3>
        <Card oui={"1"}/>
        <Card oui={"2"}/>
        <Card oui={"3"}/>
        <Card oui={"4"}/>
      </div>
    </>
  );
}

export default Home;
