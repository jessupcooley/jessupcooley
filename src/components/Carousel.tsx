import '../App.css';
import excavationImg from '../assets/img/IMG_5063.jpg';
import landGradingImg from '../assets/img/IMG_5205.jpg';
import dirtWorkImg from '../assets/img/IMG_4957.jpg';

function Carousel() {
  return (
    <section className="hero-section">
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade hero-carousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={excavationImg}
              className="d-block w-100"
              alt="Excavation"
            />
          </div>
          <div className="carousel-item">
            <img
              src={landGradingImg}
              className="d-block w-100"
              alt="Land Grading"
            />
          </div>
          <div className="carousel-item">
            <img
              src={dirtWorkImg}
              className="d-block w-100"
              alt="Dirt Work"
            />
          </div>
        </div>
      </div>

      <div className="hero-content">
        <h2 className="hero-font">Professional and reliable work</h2>
        <p>
          We are located in Peru, IN, Serving Miami county and surrounding
          communities
        </p>
      </div>

      <div className="arc-divider">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 L1440,100 L1440,0 C1080,60 360,60 0,0 L0,100 Z"
            fill="#f5f5f5"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Carousel;