import axios from "axios";
import Photo from "components/client-components/great-components/Photo";
import AddressBar from "components/general-components/AddressBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { card } from "types/card";
import { Info } from "types/info";
import { baseUrl } from "utils/baseUrl";
import './style.css'

const Photos = () => {
  
  const {id} = useParams()

  const [el, setEl] = useState<card>();

  useEffect(() => {
    axios
    .get(`${baseUrl}/client/card-details/${id}`, {
      headers: { "ngrok-skip-browser-warning": 6942 },
    })
    .then((response) => {
      setEl(response.data);
    });
}, [id]);

  const info: Info = {
    info: `Cliente/ ${el?.title}/ Fotos`,
    subInfo: ""
  }
  return (
    <div className="content-main">
      <AddressBar info={info} />
      <div className="row">
        <div className="col-4 container-col">
          <Photo />
        </div>

        <div className="col-4 container-col">
          <Photo />
        </div>

        <div className="col-4 container-col">
          <Photo />
        </div>

        <div className="col-4 container-col">
          <Photo />
        </div>

        <div className="col-4 container-col">
          <Photo />
        </div>

        <div className="col-4 container-col">
          <Photo />
        </div>

        <div className="col-4 container-col">
          <Photo />
        </div>

        <div className="col-4 container-col">
          <Photo />
        </div>
      </div>
    </div>
  );
};

export default Photos;
