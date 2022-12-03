import Collection from "pages/Collection";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom"

const MyRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collection" element={<Collection />} />
    </Routes>
  </BrowserRouter>
);

export default MyRoutes;
