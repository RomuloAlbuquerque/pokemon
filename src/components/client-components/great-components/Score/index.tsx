import './style.css'
const Score = () => {


    const el = [{}, {}, {}, {}, {}, {}, {}, {}, {}]
  return (
    <div>
      <div className="container-cards-main">
        <div className="row">
          {el?.map((x) => (
            <div className="container-card-main col-sm-12 col-md-4" >
              <div className="container-card">
              <div className="content-card">
                  <div className="title-card">
                    <h2>Score</h2>
                  </div>

                  <div className="icon-card">
                    <div className="score"></div>
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
