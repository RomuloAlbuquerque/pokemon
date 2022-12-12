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

      <Link className="link" to="/about">
        <AboutCard />
      </Link>

      <Link className="link" to="/score">
        <ScoreCard />
      </Link>

      <Link className="link" to="/photos">
        <PhotosCard />
      </Link>
    </div>
  );
};

export default Client;
