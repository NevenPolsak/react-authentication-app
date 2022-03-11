import React, { useState } from "react";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import swal from "sweetalert";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function validate(e) {
    e.preventDefault();

    if (username && password) {
      swal(
        "Login Successful",
        "Congratulation your login successful",
        "success"
      );
    } else {
      swal("Login Failed", "Please check Your details once more", "error");
    }
  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h2>User Authentication</h2>
          <form onSubmit={validate}>
            <input
              type="text"
              placeholder="username"
              className="form-control"
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input type="submit" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
