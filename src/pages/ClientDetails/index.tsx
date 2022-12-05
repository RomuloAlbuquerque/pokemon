import "./style.css";
import CardClientDetails from "components/CardClientDetails";
import InfoCollection from "components/InfoCollection";
import CardHome from "components/CardHome";
import CardClientPhotos from "components/CardClientPhotos";

const ClientDetails = () => {
  return (
    <div className="content-main">
      <InfoCollection />

      <CardClientDetails  />
      <CardClientPhotos  />
      <CardHome  />
    </div>
  );
};

export default ClientDetails;
