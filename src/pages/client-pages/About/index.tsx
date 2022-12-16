import AddressBar from "components/general-components/AddressBar";
import AboutComponent from "components/client-components/great-components/About"
import { Info } from "types/info";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { card } from "types/card";
import axios from "axios";
import { baseUrl } from "utils/baseUrl";

const About = () => {

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
    info: `Cliente/ ${el?.title}/ Sobre`,
    subInfo: ""
  }

  return (
    <div className="content-main">
      <AddressBar info={info} />
      <AboutComponent />
    </div>
  );
};

export default About;