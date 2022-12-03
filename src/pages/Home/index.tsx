import "./style.css";
import Card from "../../components/Card";
import Navigation from "../../components/Navigation";
import { userCard } from "objects/userCard";

const Home = () => {
  return (
    <>
      <div className="container-nav-map-main">
        <Navigation user={userCard.user}/>
      </div>
      <div className="container-cards-main">
        <div className="row">
          <div className="container-card-main col-sm-12 col-md-4">
            <Card card={userCard.card} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
