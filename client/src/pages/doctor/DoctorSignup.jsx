import{ useState } from "react";
import { Link } from "react-router-dom";

function DoctorSignup() {
  const formFields = [
    {
      id: 1,
      type: "text",
      name: "name",
      placeholder: "Enter your full name",
    },
    {
      id: 2,
      type: "email",
      name: "email",
      placeholder: "Enter your email",
    },
    {
      id: 3,
      type: "text",
      name: "specialization",
      placeholder: "Enter your specialization",
    },
    {
      id: 4,
      type: "text",
      name: "location",
      placeholder: "Enter your clinic location",
    },
    {
      id: 5,
      type: "number",
      name: "consultationFee",
      placeholder: "Consultation fee",
    },
    {
      id: 6,
      type: "password",
      name: "password",
      placeholder: "Create a password",
    },
    {
      id: 7,
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirm your password",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    specialization: "",
    location: "",
    consultationFee: "",
    password: "",
    confirmPassword: "",
  });
  const[error, setError] = useState("");
  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

     if (formData.password !== formData.confirmPassword) {
      setError("Password and Confirm Password do not match.");
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <section className="signup-container">
      <div className="signup-box">
        <h2>Doctor Sign Up</h2>

        <p className="signup-text">
          Create your account to manage appointments.
        </p>

        <form className="signup-form" onSubmit={handleSubmit}>
          {formFields.map((field) => (
            <input
              key={field.id}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handlechange}
              required
            />
          ))}

          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="signup-btn">
            Create Account
          </button>
        </form>

        <p className="bottom-text">
          Already have an account?{" "}
          <Link to="/doctor/login" className="login-link">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}

export default DoctorSignup;