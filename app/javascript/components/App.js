import React from "react";
import { Route, Routes } from "react-router-dom";
import Greetings from "./Greetings";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Greetings />} />
      </Routes>
    </div>
  );
};

export default App;
