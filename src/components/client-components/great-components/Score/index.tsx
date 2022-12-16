import "./style.css";
import check from "../../../../assets/img/check-mock.png";
import uncheck from "../../../../assets/img/uncheck-mock.png";
import { baseUrl } from "utils/baseUrl";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { card } from "types/card";

const Score = () => {
  const { id } = useParams();

  const [el, setEl] = useState<card>();

  useEffect(() => {
    axios
      .get(`${baseUrl}/client//card-details/${id}`, {
        headers: { "ngrok-skip-browser-warning": 6942 },
      })
      .then((response) => {
        setEl(response.data);
      });
  }, [id]);

  const visit = [];
  for (let i = 1; i <= Number(id); i++) {
    visit.push(i);
  }

  const unVisit = [];
  for (let i = 1; i <= 10 - Number(id); i++) {
    unVisit.push(i);
  }

  const addVisit = () => {
    visit.push(visit.length + 1);
  };

  const scor = document.getElementById("score");
  scor?.addEventListener("click", addVisit);

  return (
    <div>
      <div className="container-cards-score">
        <div className="row">
          {visit.map((x) => (
            <div className="col-sm-6 col-md-4">
              <div className="content-card-score">
                <div className="icon-card">
                  <h1 className="n-visita-score">
                    {x}ª Visita de {el?.title}
                  </h1>
                  <div className="score">
                    <img src={check} alt="check-mock" />
                  </div>
                </div>
              </div>
            </div>
          ))}
          {unVisit.map((x) => (
            <div className="col-sm-6 col-md-4">
              <div className="content-card-score">
                <div className="icon-card">
                  <h1 className="n-visita-score">Pendente</h1>
                  <div id="score" className="score">
                    <img src={uncheck} alt="check-mock" />
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

export default Score;
