import "./style.css";
import logo from '../../assets/img/logo.png'

const Navbar = () => {
  return (
    <div className="container-navbar">
      <div className="content-group-navbar">
        <div className="logo-navbar">
          <img
            src={logo}
            alt="logo"
          />
        </div>
      </div>
      <div className="content-group-navbar content-menu-navbar">
        <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>Admin</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
