import Navbar from "components/Navbar";
import MyRoutes from "MyRoutes";
import "./style.css";

const Main = () => {
  return (
    <div className="main-collection">
      <Navbar />

      <MyRoutes />
    </div>
  );
};

export default Main;
