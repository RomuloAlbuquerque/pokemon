import AddressBar from "components/general-components/AddressBar";
import ScoreComponent from "components/client-components/great-components/Score"
import { Info } from "types/info";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "utils/baseUrl";
import { card } from "types/card";

const Score = () => {
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
  info: `Cliente/ ${el?.title}/ Score`,
  subInfo: ""
}
  return (
    <div className="content-main">
      <AddressBar info={info}/>

      <ScoreComponent />
    </div>
  );
};

export default Score;
