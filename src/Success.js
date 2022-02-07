import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";

export default function Success() {
  const navigate = useNavigate();

  return (
    <div>
      <div>Success!</div>
      <button
        onClick={() => {
          navigate("/");
        }}
        class="btn btn-primary rounded submit p-3 px-5"
      >
        Return
      </button>
    </div>
  );
}
