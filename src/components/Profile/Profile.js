import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Profile() {
  //static user, password
  let [email, setEmail] = useState("user");
  let [pwd, setPwd] = useState("admin");
  //route
  let history = useHistory();

  //submit
  let handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "user@gmail.com" && pwd !== "admin") {
      history.push("/");
      setEmail("");
      setPwd("");
      return;
    }
    history.push("/listingpage");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <label htmlFor="floatingPassword">Password</label>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </div>
      </div>
    </form>
  );
}

export default Profile;
