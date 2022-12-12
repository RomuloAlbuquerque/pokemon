import axios from "axios";
import { useEffect, useState } from "react";
import { card } from "types/card";
import { baseUrl } from "utils/baseUrl";
import "./style.css";

const AdminCard = () => {
  const [el, setEl] = useState<card>();

  useEffect(() => {
    axios.get(`${baseUrl}/admin/card-home`, { headers: {"ngrok-skip-browser-warning": 6942}}).then((response) => {
      setEl(response.data);
    })
  },[]);
  return (
    <div>
      <div className="container-cards-admincard">
        <div className="row">
            <div className="container-card-admincard col-sm-12 col-md-4">
              <div className="container-card-admincard">
                <div className="content-card-admincard">
                  <div className="title-card-admincard">
                    <h2>{el?.title}</h2>
                  </div>
                  <div className="detail-card-admincard">
                    <p>{el?.detail}</p>
                  </div>
                  <div className="img-card-admincard">
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

export default AdminCard;
