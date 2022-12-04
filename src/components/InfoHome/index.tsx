import axios from 'axios';
import { useEffect, useState } from 'react';
import { Info } from 'types/info';
import { baseUrl } from 'utils/baseUrl';
import './style.css'

const InfoHome = ()=>{
    const [el, setEl] = useState<Info>();

    useEffect(() => {
      axios.get(`${baseUrl}/admin/info-home`, { headers: {"ngrok-skip-browser-warning": 6942}}).then((response) => {
        setEl(response.data);
      })
      },[]);

      return (
        <div className="container-nav-map-main">
          <div className="container-navigation">
            <span className="primary-point">{el?.info}</span>
            <span className="next-point">` / {el?.subInfo}</span>
          </div>
        </div>
      );
}

export default InfoHome
