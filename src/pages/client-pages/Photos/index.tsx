import Photo from "components/client-components/great-components/Photo";
import AddressBar from "components/general-components/AddressBar";
import { Info } from "types/info";

const info: Info = {
  info: "Cliente/ Nome/ Fotos",
  subInfo: "",
};

const Photos = () => {
  return (
    <div className="content-main">
      <AddressBar info={info} />
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <Photo />
          <Photo />
          <Photo />
          <Photo />
        </div>
      </div>
    </div>
  );
};

export default Photos;
