import '../App.css';
import heroBg from '../assets/img/new/main.jpg';

function Carousel() {
  return (
    <section className="hero-section">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
      <div className="portfolio-overlay"></div>
      <div className="hero-content">
        {/* Might add this back later */}
        {/* <h2 className="hero-font">Professional and reliable work</h2>
        <p>
          We are located in Peru, IN, Serving Miami county and surrounding
          communities
        </p> */}
      </div>
    </section>
  );
}

export default Carousel;
