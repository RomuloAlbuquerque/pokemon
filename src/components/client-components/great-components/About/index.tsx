import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { card } from "types/card";
import { baseUrl } from "utils/baseUrl";
import "./style.css";

const About = () => {

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
      <div className="container-cards-about">
        <div className="row">
          <div className="container-card-about col-sm-12 col-md-4">
            <div className="container-card-about">
              <div className="content-card-about">
                <div className="img-card-about">
                  <div className="title-card-about">
                    <h2>Sobre</h2>
                  </div>
                  <div className="detail-card-about">
                    <p>Nome: {client?.title}</p>
                    <p>Tclientefone:{client?.id}{client?.id}{client?.id}{client?.id}{client?.id}{client?.id}{client?.id}{client?.id}</p>
                    <p>E-mail: {client?.title}@email.com</p>
                    <p>Aniversário: {client?.detail}</p>
                    <p>Agendamento: Não há agendamento</p>
                    <p>Anotações:</p>
                    <p>Pontos: {client?.id}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
