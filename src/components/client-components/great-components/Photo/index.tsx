import axios from "axios";
import { useEffect, useState } from "react";
import { card } from "types/card";
import { baseUrl } from "utils/baseUrl";
import "./style.css";

const Photo = () => {
  const [el, setEl] = useState<card>();

  useEffect(() => {
    axios
      .get(`${baseUrl}/admin/card-home`, {
        headers: { "ngrok-skip-browser-warning": 6942 },
      })
      .then((response) => {
        setEl(response.data);
      });
  }, []);
  return (
    <div>
      <div className="container-cards-photo">

            <div className="container-card-photo">
              <div className="content-card-photo">
                <div className="img-card-photo">
                  <img src={el?.imgUrl} alt={el?.title} />
                </div>
              </div>
            </div>
          </div>
        </div>

  );
};

export default Photo;
