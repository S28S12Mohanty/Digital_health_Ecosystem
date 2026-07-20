import { PiHeartbeatLight } from "react-icons/pi";

const Navbar = () => {
  const navContent = {
    logo: "MediSlot",
  };

  return (
    <nav className="navbar">
  <div className="navbar-content">
    <div className="logo">
      <PiHeartbeatLight className="logo-icon" />
      <span>MediSlot</span>
    </div>

    <button className="signin-btn">Sign In</button>
  </div>
</nav>
  );
};

export default Navbar;