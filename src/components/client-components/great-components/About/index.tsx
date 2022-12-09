import "./style.css";

const About = () => {
  return (
    <div>
      <div className="container-cards-main">
        <div className="row">
          <div className="container-card-main col-sm-12 col-md-4">
            <div className="container-card">
              <div className="content-card">
                <div className="title-card">
                  <h2>Sobre</h2>
                </div>
                <div className="detail-card">
                  <p>Nome:</p>
                  <p>Telefone:</p>
                  <p>E-mail:</p>
                  <p>Aniversário:</p>
                  <p>Agendamento:</p>
                  <p>Anotações:</p>
                  <p>Pontos: 5</p>
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
