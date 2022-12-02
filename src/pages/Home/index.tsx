import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import Navigation from "../../components/Navigation";
import { pikachu } from "../../objects/cardsObject";
import { charmander } from "../../objects/cardsObject";
import { squirtle } from "../../objects/cardsObject";
import "./style.css";



const Home = () => {
  return (
    <div className="main-home">
      <div className="container-navbar-home">
        <Navbar />
      </div>

      <div className="content-main">
        <div className="container-nav-map-main">
          <Navigation />
        </div>
        <div className="container-cards-main">
          <div className="container-row-cards-main">
            <div className="container-card-main">
              <Card card={pikachu}/>
            </div>
            <div className="container-card-main">
              <Card card={charmander}/>
            </div>
            <div className="container-card-main">
              <Card card={squirtle}/>
            </div>
          </div>
          <div className="container-row-cards-main">
            <div className="container-card-main">
              <Card card={pikachu}/>
            </div>
            <div className="container-card-main">
              <Card card={pikachu}/>
            </div>
            <div className="container-card-main">
              <Card card={pikachu}/>
            </div>
          </div>
          <div className="container-row-cards-main">
            <div className="container-card-main">
              <Card card={pikachu}/>
            </div>
            <div className="container-card-main">
              <Card card={pikachu}/>
            </div>
            <div className="container-card-main">
              <Card card={pikachu}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
