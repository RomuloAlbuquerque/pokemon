import "./style.css";
import { Link, useParams } from "react-router-dom";
import AddressBar from "components/general-components/AddressBar";
import AboutCard from "components/client-components/client-cards/AboutCard";
import ScoreCard from "components/client-components/client-cards/ScoreCard";
import PhotosCard from "components/client-components/client-cards/PhotosCard";
import { Info } from "types/info";
import axios from "axios";
import { baseUrl } from "utils/baseUrl";
import { useEffect, useState } from "react";
import { card } from "types/card";

const Client = () => {
  const { id } = useParams();
  const [el, setEl] = useState<card>();

  useEffect(() => {
    axios
      .get(`${baseUrl}/client//card-details/${id}`, {
        headers: { "ngrok-skip-browser-warning": 6942 },
      })
      .then((response) => {
        setEl(response.data);
      });
  }, [id]);

  const info: Info = {
    info: `Cliente: ${el?.title}`,
    subInfo: "",
  };

  return (
    <div className="content-main">
      <AddressBar info={info} />

      <div className="row">
        <div className="col-4">
          {/* <div className="col-sm-12 col-md-4"> */}
          <Link className="link" to={`/client/${id}/about`}>
            <AboutCard />
          </Link>
        </div>
        <div className="col-4">
          {/* <div className="col-sm-12 col-md-4"> */}
          <Link className="link" to={`/client/${id}/score`}>
            <ScoreCard />
          </Link>
        </div>
        <div className="col-4">
          {/* <div className="col-sm-12 col-md-4"> */}
          <Link className="link" to={`/client/${id}/photos`}>
            <PhotosCard />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Client;
