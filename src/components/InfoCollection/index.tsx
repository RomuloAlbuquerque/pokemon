import axios from "axios";
import { useEffect, useState } from "react";
import { Info } from "types/info";

const InfoCollection = () => {
  const [us, setUs] = useState<Info>();

  useEffect(() => {
    axios.get(`http://localhost:3001/client/info-collection`).then((response) => {
      setUs(response.data);
    });
  }, []);

  return (
    <div className="container-nav-map-main">
      <div className="container-navigation">
        <span className="primary-point">{us?.info}</span>
        <span className="next-point">` / {us?.subInfo}</span>
      </div>
    </div>
  );
};

export default InfoCollection;
