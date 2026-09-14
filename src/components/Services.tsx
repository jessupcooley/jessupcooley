import '../App.css';
import driveway from '../assets/img/new/Driveway.jpg';
import grading from '../assets/img/new/LandGrading2.jpeg';
import excavation from '../assets/img/new/Excavation.jpg';

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
        </div>

        <div className="services-list">
          <article className="service-item">
            <div className="service-item-content">
              <h3>Gravel Driveways</h3>
              <p>
                Maintenance, installation, and extension to provide smooth and
                reliable access to your property.
              </p>
            </div>
            <div className="service-item-image">
              <img src={driveway} alt="Driveways" />
            </div>
          </article>

          <article className="service-item">
            <div className="service-item-content">
              <h3>Grading</h3>
              <p>
                Building prep, yard leveling, sloping to improve water drainage
              </p>
            </div>
            <div className="service-item-image">
              <img src={grading} alt="Land Grading" />
            </div>
          </article>

          <article className="service-item">
            <div className="service-item-content">
              <h3>Excavation</h3>
              <p>
                Complete excavation services for foundations, basements, pools,
                and utility trenches.
              </p>
            </div>
            <div className="service-item-image">
              <img src={excavation} alt="Light Excavation" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Services;
