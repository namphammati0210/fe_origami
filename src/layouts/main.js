import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { useSelector } from "react-redux";

import { Outlet, Navigate, useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();
  const authLogin = useSelector((state) => state.auth);
  console.log("🚀 ~ file: main.js ~ line 12 ~ Main ~ authLogin", authLogin);

  return Object.keys(authLogin).length !== 0 ? (
    <div>
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <div className="aside">
          <Aside />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default Main;
