import React from "react";
import "./style.css";
import Mainpage from "./Components/Mainpage";
import Secondpage from "./Components/Secondpage";
import ThirdPage from "./Components/ThirdPage";
import Item from "./Components/Item";
import FooterPage from "./Components/FooterPage";

export default function App() {
  return (
    <div>
      <Mainpage />
      <Secondpage />
      <ThirdPage />
      <Item/>
      <FooterPage />
    </div>
  );
}
