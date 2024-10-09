import { NavLink } from "react-router-dom";
// import "./style.css";

const Navabar = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "FavList",
      path: "/favList",
    },
    {
      title: "WatchList",
      path: "/watchList",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "About",
      path: "/about",
    },
    // {
    //   title: "Categories",
    //   path: "/categories",
    // },
  ];
  return (
    <>
      <header>
        <div className="text-sky">IMDB App</div>
        <nav>
          <ul>
            {links &&
              links.map((item) => {
                return (
                  <>
                    <li key={item.path}>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "text-sky" : "text"
                        }
                        to={item.path}
                      >
                        {item.title}
                      </NavLink>{" "}
                    </li>
                  </>
                );
              })}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navabar;
