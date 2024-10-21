import { NavLink } from "react-router-dom";
import Search from "../search/Search";
import { useState } from "react";
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
      <header className="container mx-auto flex justify-between items-center p-7">
        <div className="text-sky font-bold text-2xl">
          <span>IMDB App</span>
        </div>
        <nav>
          <ul className="flex space-x-8 font-medium">
            {links &&
              links.map((item) => {
                return (
                  <li key={item.path}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-sky border-b-2 line-clamp-4"
                          : "text-slate hover:text-sky"
                      }
                      to={item.path}
                    >
                      {item.title}
                    </NavLink>{" "}
                  </li>
                );
              })}
          </ul>
        </nav>
        <Search />
      </header>
    </>
  );
};

export default Navabar;
