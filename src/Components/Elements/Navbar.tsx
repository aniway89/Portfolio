import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar fixed right-0 -rotate-90 flex justify-center -mr-15">
      <div className="Links_nav flex gap-10">
        <NavLink
          to="/Blog"
          className={({ isActive }) =>
            isActive ? "links text-white font-bold" : "links"
          }
        >
          Blog
        </NavLink>

        <NavLink
          to="/Hunt"
          className={({ isActive }) =>
            isActive ? "links text-white font-bold" : "links"
          }
        >
          Hunt
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "links text-white font-bold" : "links"
          }
        >
          Home
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
