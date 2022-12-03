import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";

type Logo = {
  name: string;
  url: string;
}

const Navbar = () => {

  const [el, setEl] = useState<Logo>();

  useEffect(() => {
    axios.get(`http://localhost:3001/admin/logo-home`).then((response) => {
      setEl(response.data);
    });
  },[]);
console.log(el?.url)
  return (
    <nav className="navbar navbar-expand-sm nav-container container-navbar">
      <div className="container-fluid">
        <div className="logo logo-navbar">
          <img src={el?.url} alt={el?.name} />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-main"
          aria-controls="navbar-main"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse container-menu"
          id="navbar-main"
        >
          <ul className="navbar-nav offset-md-2 list-navbar">
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/collection">
              <li>Coleção</li>
            </a>
            <a href="/">
              <li>Admin</li>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
