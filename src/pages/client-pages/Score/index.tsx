import AddressBar from "components/general-components/AddressBar";
import ScoreComponent from "components/client-components/great-components/Score"
import { Info } from "types/info";

const info: Info = {
  info: "Cliente/ Nome cliente/ Score",
  subInfo: ""
}

const Score = () => {
  return (
    <div className="content-main">
      <AddressBar info={info}/>

      <ScoreComponent />
    </div>
  );
};

export default Score;
