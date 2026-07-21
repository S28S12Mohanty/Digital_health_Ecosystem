import { Link } from "react-router-dom";

function DoctorLogin() {
  const formFields = [
    {
      id: 1,
      type: "email",
      name: "email",
      placeholder: "Enter your email",
    },
    {
      id: 2,
      type: "password",
      name: "password",
      placeholder: "Enter your password",
    },
  ];

  return (
    <section className="login-container">
      <div className="login-box">
        <h2>Doctor Login</h2>

        <p className="login-text">
          Login to manage your appointments.
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
          <Link to="/doctor/signup" className="signup-link">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
}

export default DoctorLogin;