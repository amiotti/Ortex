import React from "react";
import { useNavigate } from "react-router-dom";

export default function Reset() {
  let navigate = useNavigate();
  const onSubmit = () => {
    navigate("/success");
  };

  return (
    <div className="container">
      <form className="form-group2 d-flex" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Email"
          className="form-control rounded-left"
        ></input>
        <button type="submit" class="btn btn-primary rounded submit p-3 px-5">
          Reset
        </button>
      </form>
    </div>
  );
}
