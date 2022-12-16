import "./style.css";
import { Link } from "react-router-dom";
import AddressBar from "components/general-components/AddressBar";
import ClientCard from "components/client-components/client-cards/ClientCard";
import { Info } from "types/info";

const info: Info = {
  info: "Clientes",
  subInfo: ""
}

const Clients = () => {
  return (
    <div className="content-main">
      <AddressBar info={info} />


        <ClientCard />

    </div>
  );
};

export default Clients;
