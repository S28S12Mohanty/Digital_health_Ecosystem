import { FiSearch, FiMapPin } from "react-icons/fi";


function Hero() {
  const heroContent = {
    title: "Find a doctor & book in under 2 minutes",
    description:
      "Search by specialization or city, pick a live slot, and get an instant booking confirmation.",
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{heroContent.title}</h1>
        <p>{heroContent.description}</p>
      </div>

      <div className="search-box">
        <div className="input-box">
          <FiSearch className="input-icon" />
          <input
            type="text"
            placeholder="Doctor name or specialization"
          />
        </div>

        <div className="input-box">
          <FiMapPin className="input-icon" />
          <input
            type="text"
            placeholder="City / Area"
          />
        </div>

        <button className="search-btn">
          Search
        </button>
      </div>
    </section>
  );
}

export default Hero;