import Navbar from "components/Navbar";
import MyRoutes from "MyRoutes";
import "./style.css";

const Main = () => {
  return (
    <div className="main-collection">
      <div className="container-navbar-collection">
        <Navbar />
      </div>
      <div>
        <div className="content-main">
          <MyRoutes />
        </div>
      </div>
    </div>
  );
};

export default Main;
