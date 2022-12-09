import AddressBar from "components/general-components/AddressBar";
import CardHome from "components/home-components/HomeCard";
import { Info } from "types/info";
import "../Home/style.css";

const clients:Info = {
  info: 'Rosângela',
  subInfo: 'Seja Bem Vinda'
}

const Home = () => {
  return (
    <div className="content-main">
      <AddressBar info={clients}/>

      <CardHome />
    </div>
  );
};

export default Home;
