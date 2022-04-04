import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./layout.scss";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname !== "/login" && <Navbar />}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
