import { Link } from "react-router-dom";
import {FaSearch, FaShoppingBag} from "react-icons/fa"


const Header = () => {
  return (
    <nav className="header">

      <Link to={"/"} >Home</Link>
      <Link to={"/search"} ><FaSearch /></Link>
      <Link to={"/shopping"} ><FaShoppingBag /></Link>

        
    </nav>
  )
}

export default Header;