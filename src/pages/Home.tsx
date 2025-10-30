import "./home.css";
import Card from "../components/Card";
function Home() {
  return (
    <>
      <div className="home">
        <h1>Que la Force du flirt soit avec toi</h1>
        <h3>Choisie ton humeur</h3>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default Home;
