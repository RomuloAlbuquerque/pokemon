import About from "pages/client-pages/About";
import Home from "pages/home-pages/Home";
import Photos from "pages/client-pages/Photos";
import Score from "pages/client-pages/Score";
import Clients from "pages/client-pages/Clients";
import Client from "pages/client-pages/Client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const MyRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/client" element={<Clients />} />
      <Route path="/client/:id" element={<Client />} />
      <Route path="/about" element={<About />} />
      <Route path="/score" element={<Score />} />
      <Route path="/photos" element={<Photos />} />
    </Routes>
  </BrowserRouter>
);

export default MyRoutes;
