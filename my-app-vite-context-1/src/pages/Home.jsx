import "./Home.css";

import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {


  return (
    <div>
     <h1>Home</h1>
    </div>
  );
};

export default Home;
