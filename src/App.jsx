import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Room from "./page/Room";
import Home from "./page/Home";

const App = () => {
  return (
    <>
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/room/:id" element={<Room/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
};

export default App;
