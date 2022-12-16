import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { card } from "types/card";
import { baseUrl } from "utils/baseUrl";
import "./styles.css";

const ClientCard = () => {
  const [el, setEl] = useState<card[]>();

  useEffect(() => {
    axios
      .get(`${baseUrl}/client/card-collection`, {
        headers: { "ngrok-skip-browser-warning": 6942 },
      })
      .then((response) => {
        setEl(response.data);
      });
  }, []);

  return (
    <div>
      <div className="container-cards-clientcard">
        <div className="row">
          {el?.map((x) => (
            <div
            className="container-card-clientcard col-4"
              // className="container-card-clientcard col-sm-12 col-md-4"
              key={x.id}
            >
              <div className="card-clientcard">
                <Link to={`/client/${x.id}`}>
                  <div className="content-card-clientcard">
                    <div className="title-card-clientcard">
                      <h2>{x.title}</h2>
                    </div>
                    <div className="detail-card-clientcard">
                      <p>{x.detail}</p>
                    </div>
                    <div className="img-card-clientcard">
                      <img src={x.imgUrl} alt={x.title} />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
