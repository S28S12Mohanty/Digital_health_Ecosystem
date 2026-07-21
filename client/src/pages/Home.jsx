import "../App.css";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ChooseRole from "../components/ChooseRole";

function Home() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <Navbar setShowPopup={setShowPopup} />
      <Hero />
      {showPopup && <ChooseRole setShowPopup={setShowPopup} />}
    </>
  );
}

export default Home;
