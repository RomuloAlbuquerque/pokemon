import "./style.css";
import CardCollection from "components/CardCollection";
import InfoCollection from "components/InfoCollection";

const Collection = () => {
  return (
    <div className="content-main">
      <InfoCollection />

      <CardCollection />
    </div>
  );
};

export default Collection;
