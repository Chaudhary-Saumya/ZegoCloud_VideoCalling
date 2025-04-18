import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [value, setvalue] = useState();
  const navigation = useNavigate();

  const handler = (e) => {
    e.preventDefault();
    navigation(`/room/${value}`);
  };
  return (
    <div>
      <h1>Home</h1>
      <input
        type="text"
        placeholder="enter your id"
        value={value}
        onChange={(e) => {
          setvalue(e.target.value);
        }}
      />
      <button onClick={handler}>Join</button>
    </div>
  );
};

export default Home;
