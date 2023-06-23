import React from "react";
import Homescreen from "../src/components/homescreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Create from "../src/components/create";
const app = () => {
  return (
    // <div>
    //   <Homescreen />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen />} />

        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
};
export default app;
