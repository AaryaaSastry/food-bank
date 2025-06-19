import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
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
      <div className="d-flex flex-column align-items-center justify-content-center bg-light" style={{ height: "90vh" }}>
        <div style={{ marginTop: "40px" }}>
          <h3 className="mb-4 text-center">Register Here</h3>
          <div className="bg-white p-4 rounded shadow" style={{ width: "350px" }}>
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-3">
                <label className="form-label">
                  <strong>Name</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="form-control rounded-0"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">
                  <strong>Email</strong>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="form-control rounded-0"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label">
                  <strong>Password</strong>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="form-control rounded-0"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Register Button */}
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
                Register
              </button>

              {/* Login Link */}
              <p className="text-center">Already Have an Account?</p>
              <Link
                to="/login"
                className="w-100 d-block text-center text-decoration-none"
                style={{
                  backgroundColor: "#ffaa00",
                  color: "white",
                  fontWeight: "bold",
                  padding: "10px",
                  borderRadius: "20px",
                }}
              >
                Login
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
