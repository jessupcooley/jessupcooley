import '../App.css';
import aboutImage from '../assets/img/new/jessup.jpeg';

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
              <div className="section-title text-center">
                <h2>About Us</h2>
              </div>
              <p>
                Cooley Land Service was founded by Jessup Cooley in 2025. Jessup
                grew up with a background in construction and graduated from
                Purdue University with a B.S. in Mechanical Engineering
                Technology. He decided to apply his skills toward his own
                company, with the goal of providing quality and professional
                services to its customers. We are proud to serve North Central
                Indiana.
              </p>
              <div className="about-features">
                <div className="feature">
                  <i className="fas fa-check-circle"></i>
                  <span>Fully insured</span>
                </div>
                <div className="feature">
                  <i className="fas fa-check-circle"></i>
                  <span>Creative and flexible project planning</span>
                </div>
                <div className="feature">
                  <i className="fas fa-check-circle"></i>
                  <span>Committed to customer satisfaction </span>
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
