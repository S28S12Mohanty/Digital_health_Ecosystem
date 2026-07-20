import { useNavigate } from "react-router-dom";

function ChooseRole() {
  const navigate = useNavigate();

  return (
    <div className="role-container">

      <h1>Welcome to MediSlot</h1>

      <p>Select your role</p>

      <div className="role-buttons">

        <button onClick={() => navigate("/patient/login")}>
          Patient
        </button>

        <button onClick={() => navigate("/doctor/login")}>
          Doctor
        </button>

      </div>

    </div>
  );
}

export default ChooseRole;