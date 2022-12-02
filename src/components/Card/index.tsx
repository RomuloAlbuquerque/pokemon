import { card } from "../../types/card";
import "./style.css";

type Props = {
  card: card
}

const Card = ({card}: Props) => {
  return (
    <div className="container-card">
      <div className="content-card">
        <div className="title-card">
          <h2>{card.title}</h2>
        </div>
        <div className="detail-card">
          <p>{card.detail}</p>
        </div>
        <div className="icon-card">
          <img src={card.imgUrl} alt={card.title} />
        </div>
      </div>
    </div>
  );
};

export default Card;
