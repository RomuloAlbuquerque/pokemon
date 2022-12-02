import "./style.css";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import Navigation from "../../components/Navigation";
import {
  bulbasaur,
  pikachu,
  charmander,
  squirtle,
  caterpie,
  metapod,
  butterfree,
  beedrill,
  pidgey,
  weedle,
  rattata,
  clefairy,
  jigglypuff,
} from "../../objects/cardsObject";

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
          <div className="row">
            <div className="container-card-main col-sm-12 col-md-4">
              <Card card={pikachu} />
            </div>
            <div className="container-card-main col-sm-12 col-md-4">
              <Card card={charmander} />
            </div>
            <div className="container-card-main col-sm-12 col-md-4">
              <Card card={squirtle} />
            </div>
            <div className="container-card-main col-sm-12 col-md-4">
              <Card card={bulbasaur} />
            </div>
            <div className="container-card-main col-sm-12 col-md-4">
              <Card card={caterpie} />
            </div>
            <div className="container-card-main col-sm-12 col-md-4">
              <Card card={metapod} />
            </div>
            <div className="container-card-main col-sm-12 col-md-4">
              <Card card={butterfree} />
            </div>
            <div className="container-card-main col-sm-12 col-md-4">
              <Card card={beedrill} />
            </div>
            <div className="container-card-main col-sm-12 col-md-4">
              <Card card={pidgey} />
            </div>
            <div className="container-card-main col-sm-12 col-md-4">
              <Card card={weedle} />
            </div>
            <div className="container-card-main col-sm-12 col-md-4">
              <Card card={rattata} />
            </div>
            <div className="container-card-main col-sm-12 col-md-4">
              <Card card={clefairy} />
            </div>
            <div className="container-card-main col-sm-12 col-md-4">
              <Card card={jigglypuff} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
