import "./style.css";
import home from "../../../assets/img/home.png"

const HomeCard = () => {

  return (
    <div>
      <div className="container-cards-homecard">
        <div className="row">
            <div className="container-card-homecard col-sm-12 col-md-4">
              <div className="container-card-homecard">
                <img src={home} alt="logo"/>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
