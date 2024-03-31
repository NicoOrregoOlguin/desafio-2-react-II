import { Link } from "react-router-dom";
import "../components/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"> Home </Link> | <Link to="/favoritos"> Favoritos </Link>
    </nav>
  );
};
export default Navbar;
