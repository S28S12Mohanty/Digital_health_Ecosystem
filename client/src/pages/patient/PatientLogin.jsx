import { Link } from "react-router-dom";

function PatientLogin() {
  const formFields = [
    {
      id: 1,
      type: "email",
      placeholder: "Enter your email",
      name: "email",
    },
    {
      id: 2,
      type: "password",
      placeholder: "Enter your password",
      name: "password",
    },
  ];

  return (
    <section className="login-container">
      <div className="login-box">
        <h2>Patient Login</h2>

        <p className="login-text">
          Welcome back! Please login to continue.
        </p>

        <form className="login-form">
          {formFields.map((field) => (
            <input
              key={field.id}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required
            />
          ))}

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="bottom-text">
          Don't have an account?{" "}
          <Link to="/patient/signup" className="signup-link">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
}

export default PatientLogin;