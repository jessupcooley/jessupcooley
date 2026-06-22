import '../App.css';
import aboutImage from '../assets/img/IMG_5208.jpg';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img">
              <img src={aboutImage} alt="About" className="img-fluid rounded" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <div className="section-title text-start">
                <h2>About Us</h2>
              </div>
              <p>
                Cooley Land Service is located in Peru Indiana serving miami
                county and surrounding areas
              </p>
              <p>
                Our team consists of experienced professionals who understand
                the importance of getting the job done right the first time.
              </p>
              <div className="about-features">
                <div className="feature">
                  <i className="fas fa-check-circle"></i>
                  <span>Licensed and insured professionals</span>
                </div>
                <div className="feature">
                  <i className="fas fa-check-circle"></i>
                  <span>Modern, well-maintained equipment</span>
                </div>
                <div className="feature">
                  <i className="fas fa-check-circle"></i>
                  <span>Competitive pricing and free estimates</span>
                </div>
                <div className="feature">
                  <i className="fas fa-check-circle"></i>
                  <span>Commitment to customer satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
