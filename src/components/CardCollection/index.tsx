import axios from "axios";
import { useEffect, useState } from "react";
import { card } from "types/card";
import { baseUrl } from "utils/baseUrl";
import "./style.css";

const CardCollection = () => {
  const [el, setEl] = useState<card[]>();

  useEffect(() => {
    axios.get(`${baseUrl}/client/card-collection`, { headers: {"ngrok-skip-browser-warning": 6942}}).then((response) => {
      setEl(response.data);
    })
  }, []);

  return (
    <div>
      <div className="container-cards-main">
        <div className="row">
          {el?.map((x) => (
            <div className="container-card-main col-sm-12 col-md-4" key={x.id}>
              <div className="container-card">
                <div className="content-card">
                  <div className="title-card">
                    <h2>{x.title}</h2>
                  </div>
                  <div className="detail-card">
                    <p>{x?.detail}</p>
                  </div>
                  <div className="icon-card">
                    <img src={x?.imgUrl} alt={x?.title} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCollection;
