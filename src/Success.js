import React from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div>Success!</div>
      <button onClick={toHome} class="btn btn-primary rounded submit p-3 px-5">
        Return
      </button>
    </div>
  );
}
