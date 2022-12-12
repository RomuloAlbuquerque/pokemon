import "./style.css";
import { Link } from "react-router-dom";
import AddressBar from "components/general-components/AddressBar";
import AboutCard from "components/client-components/client-cards/AboutCard";
import ScoreCard from "components/client-components/client-cards/ScoreCard";
import PhotosCard from "components/client-components/client-cards/PhotosCard";
import { Info } from "types/info";

const info: Info = {
  info: "Cliente/ Nome cliente",
  subInfo: "",
};

const Client = () => {
  return (
    <div className="content-main">
      <AddressBar info={info} />

      <div className="row">
        <div className="col-sm-12 col-md-4">
        <Link className="link" to="/about">
          <AboutCard />
          </Link>
        </div>
        <div className="col-sm-12 col-md-4">
        <Link className="link" to="/score">
          <ScoreCard />
          </Link>
        </div>
        <div className="col-sm-12 col-md-4">
        <Link className="link" to="/photos">
          <PhotosCard />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Client;