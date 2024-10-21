import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import FavList from "../pages/favList/FavList";
import WatchList from "../pages/watchList/WatchList";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import NotFound from "../pages/notFound/NotFound";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/favList" element={<FavList />}></Route>
      <Route path="/watchList" element={<WatchList />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default Routing;
