import "./style/navBar.css";
import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"
import ebider from '../assets/ebider.svg';

function NavBar()
{
    const location=useLocation();
    const navigate = useNavigate(); 
    return(
        <div className="title-bar">
        <a href="#default" class="logo"> Ebidder</a>
        <div className="login-button-container">
        <div>Home</div>
        <div>Auction</div>
        <div>How It Works</div>
        <div>About Us</div>
        <div>Contact</div>
          <button className="login-button" onClick={(e)=>{
               navigate("/login");
              
            }}>Login</button>
        </div>
      </div>
      )
}

export default NavBar;