import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = { email, password };
    console.log(JSON.stringify(user));
    fetch("/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/success");
  };

  const validateForm = () => {
    return email.length > 0 && password.length > 5;
  };

  return (
    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-5">
            <div class="login-wrap p-4 p-md-5">
              <div class=" d-flex align-items-center justify-content-center">
                <img
                  src="https://app.ortex.com/_next/image?url=%2Fassets%2Fortex-logo-v.png&w=256&q=75"
                  class=" d-flex align-items-center justify-content-center"
                  alt="ortexlogo"
                ></img>
              </div>
              <h3 class="text-center mb-4">Have an account?</h3>
              <form action="#" class="login-form" onSubmit={handleSubmit}>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control rounded-left"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <div class="form-group d-flex">
                  <input
                    type="password"
                    class="form-control rounded-left"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>

                <div class="form-group d-md-flex">
                  <div class="w-50">
                    <label class="checkbox-wrap checkbox-primary">
                      Remember Me
                    </label>
                  </div>

                  <input type="checkbox" className="checkmark"></input>
                </div>
                <div class="w-50 text-md-right">
                  <Link to="/reset">Forgot Password</Link>
                </div>

                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-primary rounded submit p-3 px-5"
                    disabled={!validateForm()}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
