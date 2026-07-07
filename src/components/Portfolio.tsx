import '../App.css';
import projectBg from '../assets/img/IMG_5206.jpg';
import project1 from '../assets/img/IMG_5207.jpg';
import project2 from '../assets/img/IMG_5208.jpg';
import project3 from '../assets/img/IMG_5209.jpg';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div
        className="portfolio-bg"
        style={{ backgroundImage: `url(${projectBg})` }}
      ></div>
      <div className="portfolio-overlay"></div>

      <div className="container">
        <div className="section-title">
          <h2 className="light-text-override">Our Projects</h2>
          <p>Check out some of our recent work</p>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="portfolio-item">
              <img src={project1} alt="Project 1" />
            </div>
          </div>

          <div className="col-md-4">
            <div className="portfolio-item">
              <img src={project2} alt="Project 2" />
            </div>
          </div>

          <div className="col-md-4">
            <div className="portfolio-item">
              <img src={project3} alt="Project 3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;