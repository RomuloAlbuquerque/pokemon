import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { card } from "types/card";
import { baseUrl } from "utils/baseUrl";
import "./style.css";

const About = () => {



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
                    <p>Nome:</p>
                    <p>Telefone:</p>
                    <p>E-mail:</p>
                    <p>Aniversário:</p>
                    <p>Agendamento:</p>
                    <p>Anotações:</p>
                    <p>Pontos: 03</p>
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
