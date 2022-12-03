import axios from "axios";
import { useEffect, useState } from "react";
import { card } from "types/card";
import "./style.css";

const CardHome = () => {
  const [ca, setCa] = useState<card>();

  useEffect(() => {
    axios.get(`http://localhost:3001/admin/card-home`).then((response) => {
      setCa(response.data);
    });
  },[]);
  return (
    <div>
      <div className="container-cards-main">
        <div className="row">
            <div className="container-card-main col-sm-12 col-md-4">
              <div className="container-card">
                <div className="content-card">
                  <div className="title-card">
                    <h2>{ca?.title}</h2>
                  </div>
                  <div className="detail-card">
                    <p>{ca?.detail}</p>
                  </div>
                  <div className="icon-card">
                    <img src={ca?.imgUrl} alt={ca?.title} />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
