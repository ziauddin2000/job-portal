import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../AuthProvider/AuthContext";

const Navbar = () => {
  let { user, signOutUser } = useContext(AuthContext);

  let navigate = useNavigate();

  let handleLogout = () => {
    signOutUser()
      .then(() => {
        navigate("/signin");
        //console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let menu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/all-jobs">All Jobs</Link>
      </li>
      <li>
        <Link to="/my-applications">Job Application</Link>
      </li>
      <li>
        <Link to="/post-job">Post Job</Link>
      </li>
      <li>
        <Link to="/my-posted-job">My Posted Job</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 py-5 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {menu}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img src="images/logo.png" className="w-40" alt="Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <>
            <button className="btn" onClick={handleLogout}>
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="/signin" className="btn">
              Sign In
            </Link>
            <Link to="/signup" className="btn">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
