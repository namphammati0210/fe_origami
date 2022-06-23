import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Main = ({ children }) => {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <div className="aside">
          <Aside />
        </div>
        <div className="content">{children}</div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
