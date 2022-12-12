import "./style.css";
import check from "../../../../assets/img/check-mock.png";
import uncheck from "../../../../assets/img/uncheck-mock.png";

const Score = () => {
  return (
    <div>
      <div className="container-cards-score">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="content-card-score">
              <div className="icon-card">
                <h1 className="n-visita-score">1ª Visita</h1>
                <div className="score">
                  <img src={check} alt="check-mock" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="content-card-score">
              <div className="icon-card">
                <h1 className="n-visita-score">2ª Visita</h1>
                <div className="score">
                  <img src={check} alt="check-mock" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="content-card-score">
              <div className="icon-card">
                <h1 className="n-visita-score">3ª Visita</h1>
                <div className="score">
                  <img src={check} alt="check-mock" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="content-card-score">
              <div className="icon-card">
                <h1 className="n-visita-score">4ª Visita</h1>
                <div className="score">
                  <img src={uncheck} alt="uncheck-mock" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="content-card-score">
              <div className="icon-card">
                <h1 className="n-visita-score">5ª Visita</h1>
                <div className="score">
                  <img src={uncheck} alt="uncheck-mock" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="content-card-score">
              <div className="icon-card">
                <h1 className="n-visita-score">6ª Visita</h1>
                <div className="score">
                  <img src={uncheck} alt="uncheck-mock" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="content-card-score">
              <div className="icon-card">
                <h1 className="n-visita-score">7ª Visita</h1>
                <div className="score">
                  <img src={uncheck} alt="uncheck-mock" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="content-card-score">
              <div className="icon-card">
                <h1 className="n-visita-score">8ª Visita</h1>
                <div className="score">
                  <img src={uncheck} alt="uncheck-mock" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
