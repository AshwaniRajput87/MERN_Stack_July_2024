import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  // const [Home, setHome] = useState(null);

  // const loadHomePage = import("./pages/Home").then((module) =>
  //   setHome(module.default)
  // );
  return (
    <>
      <nav>
        <ul>
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
    </>
  );
};

export default Navbar;
