import axios from "axios";
import { useEffect, useState } from "react";
import { card } from "types/card";
import { baseUrl } from "utils/baseUrl";
import "./style.css";

const HomeCard = () => {
  const [el, setEl] = useState<card>();

  useEffect(() => {
    axios.get(`${baseUrl}/admin/card-home`, { headers: {"ngrok-skip-browser-warning": 6942}}).then((response) => {
      setEl(response.data);
    })
  },[]);
  return (
    <div>
      <div className="container-cards-homecard">
        <div className="row">
            <div className="container-card-homecard col-sm-12 col-md-4">
              <div className="container-card-homecard">
                <div className="content-card-homecard">
                  <div className="title-card-homecard">
                    <h2>{el?.title}</h2>
                  </div>
                  <div className="detail-card-homecard">
                    <p>{el?.detail}</p>
                  </div>
                  <div className="img-card-homecard">
                    <img src={el?.imgUrl} alt={el?.title} />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
