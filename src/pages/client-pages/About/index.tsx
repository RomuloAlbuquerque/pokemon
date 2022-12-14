import AddressBar from "components/general-components/AddressBar";
import AboutComponent from "components/client-components/great-components/About"
import { Info } from "types/info";

const info: Info = {
  info: "Cliente/ Nome cliente/ Sobre",
  subInfo: ""
}

const About = () => {

  return (
    <div className="content-main">
      <AddressBar info={info} />
      <AboutComponent />
    </div>
  );
};

export default About;
