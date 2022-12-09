import { Info } from "types/info";
import "./style.css";

type Props = {
  info: Info;
}

const AddressBar = ({info}:Props) => {

  return (
    <div className="container-addressbar">
      <div className="container-texts-addressbar">
        <span className="info-addressbar">{info.info}</span>
        <span className="subinfo-addressbar">: {info.subInfo}</span>
      </div>
    </div>
  );
};

export default AddressBar;
