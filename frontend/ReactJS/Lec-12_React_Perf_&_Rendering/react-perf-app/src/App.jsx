import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import Navbar from "./components/navbar/Navbar";

import { lazy, Suspense, useEffect, useState } from "react";
import LargeArraySum from "./components/LargeArraySum";
import ItemList from "./components/navbar/ItemList";

const App = () => {
  const HomePage = lazy(() => import("./pages/Home"));
  const AboutUsPage = lazy(() => import("./pages/AboutUs"));
  const ContactUsPage = lazy(() => import("./pages/ContactUS"));
  // const [Home, setHome] = useState(null);
  // const [AboutUs, setAboutUs] = useState(null);
  // const [ContactUs, setContactUs] = useState(null);

  // const loadHomePage = import("./pages/Home").then((module) =>
  //   setHome(module.default)
  // );
  // const loadAboutUSPage = import("./pages/AboutUs").then((module) =>
  //   setAboutUs(module.default)
  // );
  // const loadContactPage = import("./pages/ContactUS").then((module) =>
  //   setContactUs(module.default)
  // );

  // useEffect(() => {
  //   import("./pages/Home").then((module) => setHome(module.default));
  // }, []);

  return (
    <>
      <BrowserRouter>
        <>
          {/* <Navbar /> */}
          <nav>
            <ul>
              {/* <li>
                <Link to="/" onClick={loadHomePage}>
                  {" "}
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={loadAboutUSPage}>
                  {" "}
                  About Us{" "}
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={loadContactPage}>
                  Contact Us{" "}
                </Link>
              </li> */}
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                <Link to="/about"> About Us </Link>
              </li>
              <li>
                <Link to="/contact">Contact Us </Link>
              </li>
            </ul>
          </nav>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/contact" element={<ContactUsPage />} />
            </Routes>
          </Suspense>
        </>
      </BrowserRouter>
      <LargeArraySum />
      <ItemList />
    </>
  );
};

export default App;
