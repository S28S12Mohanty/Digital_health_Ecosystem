import { useNavigate } from "react-router-dom";
import { FaUser, FaUserMd } from "react-icons/fa";

function ChooseRole({ setShowPopup }) {
  const navigate = useNavigate();

  const roles = [
    {
      id: 1,
      name: "Patient",
      icon: <FaUser />,
      path: "/patient/login",
      className: "patient-btn",
    },
    {
      id: 2,
      name: "Doctor",
      icon: <FaUserMd />,
      path: "/doctor/login",
      className: "doctor-btn",
    },
  ];

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h2>Welcome to MediSlot</h2>
        <p>Select your role</p>

        <div className="role-buttons">
          {roles.map((role) => (
            <button
              key={role.id}
              className={role.className}
              onClick={() => navigate(role.path)}
            >
              <span className="role-icon">{role.icon}</span>
              <span>{role.name}</span>
            </button>
          ))}
        </div>

        <button
          className="close-btn"
          onClick={() => setShowPopup(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ChooseRole;