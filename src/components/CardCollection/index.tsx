import axios from "axios";
import { useEffect, useState } from "react";
import { card } from "types/card";
import "./style.css";

const CardCollection = () => {
  const [ca, setCa] = useState<card[]>();

  useEffect(() => {
    axios.get(`http://localhost:3001/client/card-collection`).then((response) => {
      setCa(response.data);
    });
  }, []);

  return (
    <div>
      <div className="container-cards-main">
        <div className="row">
          {ca?.map((x) => (
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
