import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { card } from "types/card";
import { baseUrl } from "utils/baseUrl";
import "./style.css";

const Photo = () => {
  const {id} = useParams()

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

const client =  el?.find(x=>Number(x.id)===Number(id))
  return (
    <div>
      <div className="container-cards-photo">

            <div className="container-card-photo">
              <div className="content-card-photo">
                <div className="img-card-photo">
                  <img src={client?.imgUrl} alt={client?.title} />
                </div>
              </div>
            </div>
          </div>
        </div>

  );
};

export default Photo;
