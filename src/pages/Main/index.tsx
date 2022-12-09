import Navbar from "components/general-components/Navbar";
import MyRoutes from "MyRoutes";
import "../Main/style.css";

const Main = () => {
  return (
    <div className="main-collection">
      <Navbar />

      <MyRoutes />
    </div>
  );
};

export default Main;
