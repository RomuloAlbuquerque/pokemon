import "./style.css";
import Card from "../../components/Card";
import Navigation from "../../components/Navigation";
import { ash } from "objects/collection";
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
  ashCatchum,
} from "../../objects/cardsObject";

const Collection = () => {
  return (
    <>
      <div className="container-nav-map-main">
        <Navigation user={ash} />
      </div>
      <div className="container-cards-main">
        <div className="row">
          <div className="container-card-main col-sm-12 col-md-4">
            <Card card={bulbasaur} />
          </div>
          <div className="container-card-main col-sm-12 col-md-4">
            <Card card={pikachu} />
          </div>
          <div className="container-card-main col-sm-12 col-md-4">
            <Card card={charmander} />
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
            <Card card={squirtle} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
