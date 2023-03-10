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
        <div className="navbar-buttons">
        <div  onClick={(e)=>{ navigate("/")}}  className="navbar-button">Home</div>
        <div onClick={(e)=>{ navigate("/auction")}}  className="navbar-button">Auction</div>
        <div onClick={(e)=>{ navigate("/working")}} className="navbar-button">How It Works</div>
        <div onClick={(e)=>{ navigate("user/dashboard")}} className="navbar-button">Dashboard</div>
        <div className="navbar-button">About Us</div>
          <button className="login-button" onClick={(e)=>{
               navigate("/login");
              
            }}>Login</button>
        </div>
      </div>
      )
}

export default NavBar;