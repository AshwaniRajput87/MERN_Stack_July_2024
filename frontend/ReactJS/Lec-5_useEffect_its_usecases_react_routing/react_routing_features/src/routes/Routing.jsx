import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/home/Home";
import AboutUs from "../pages/aboutus/AboutUs";
import ClassRoom from "../pages/classroom/ClassRoom";
import PageNotFound from "../pages/pageNotFound/PageNotFound";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutus/" element={<AboutUs />}></Route>
        <Route
          path="/meentee/classroom/:classId/session/:sessionId"
          element={<ClassRoom />}
        ></Route>
        <Route path="/home" element={<Navigate to="/" />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
};

export default Routing;
