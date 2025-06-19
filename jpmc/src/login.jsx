import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          navigate("/volunteers"); // redirect to dashboard
        } else {
          alert("Invalid credentials");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong. Try again.");
      });
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark px-4">
        <div
          className="navbar-brand mb-0 h1"
          style={{ fontWeight: "bold", fontSize: "22px" }}
        >
          bangalore <span style={{ color: "orange" }}>food bank</span>
        </div>
      </nav>

      {/* Form Container */}
      <div
        className="d-flex flex-column align-items-center justify-content-center bg-light"
        style={{ height: "90vh" }}
      >
        <div style={{ marginTop: "40px" }}>
          <h3 className="mb-4 text-center">Login</h3>
          <div
            className="bg-white p-4 rounded shadow"
            style={{ width: "350px" }}
          >
            <form onSubmit={handleLogin}>
              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email">
                  <strong>Email</strong>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  autoComplete="off"
                  name="email"
                  className="form-control rounded-0"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label htmlFor="password">
                  <strong>Password</strong>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  className="form-control rounded-0"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-100 mb-2"
                style={{
                  backgroundColor: "#ffaa00",
                  border: "none",
                  color: "white",
                  fontWeight: "bold",
                  padding: "10px",
                  borderRadius: "20px",
                }}
              >
                Login
              </button>

              {/* Register Redirect */}
              <p className="text-center">Don't have an account?</p>
              <Link
                to="/register"
                className="w-100 d-block text-center text-decoration-none"
                style={{
                  backgroundColor: "#ffaa00",
                  color: "white",
                  fontWeight: "bold",
                  padding: "10px",
                  borderRadius: "20px",
                }}
              >
                Register
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
