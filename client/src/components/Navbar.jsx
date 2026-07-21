import { PiHeartbeatLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setShowPopup }) => {
  const navigate = useNavigate();

  const navContent = {
    logo: "MediSlot",
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <PiHeartbeatLight className="logo-icon" />
          <span>{navContent.logo}</span>
        </div>

        <button className="signin-btn"  onClick={() => setShowPopup(true)}>
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
