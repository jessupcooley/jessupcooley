import '../App.css';

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>Professional dirt and excavation services for all your needs</p>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="service-card bg-image-trailer bg-image">
              <h3>Driveways</h3>
              <p>
                Professional gravel driveway installation, extension, and
                maintenance
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card bg-image-rocket bg-image">
              <h3>Land Grading</h3>
              <p>
                Professional land grading to prepare your property for
                construction or improve drainage.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card bg-image-lightexcavation bg-image">
              <h3>Light Excavation</h3>
              <p>
                Complete excavation services for foundations, basements, pools,
                and utility trenches.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card bg-image-barn bg-image">
              <h3>Landscaping</h3>
              <p>
                Expert drainage system installation to prevent water damage and
                flooding
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Fencing</h3>
              <p>
                Protect your property with effective erosion control solutions
                and retaining walls.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-recycle"></i>
              </div>
              <h3>Soil Remediation</h3>
              <p>
                Improve poor soil conditions with our professional soil
                remediation services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
