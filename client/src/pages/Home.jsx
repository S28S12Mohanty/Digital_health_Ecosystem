import "../App.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero"; 


function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className="container">
      <h1>Digital Health Ecosystem</h1>
      <p>Find the Best Doctor Near You</p>
    </div>
    </>
  );
}

export default Home;
