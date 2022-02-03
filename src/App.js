import React from "react";
import Data from "./Data";
import Login from "./Login";

export default function App() {
  return (
    <div>
      <div>
        <Login />
      </div>
      <div display="flex">
        <Data />
      </div>
    </div>
  );
}
