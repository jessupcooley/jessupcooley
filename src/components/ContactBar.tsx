import '../App.css';

function ContactBar() {
  return (
    <div id="sub-bar">
      <div className="container-fluid">
        <div className="contact-info">
          <a href="tel:765-475-4252">
            <i className="fas fa-phone-alt"></i> (765) 475-4252
          </a>
          <span className="mx-3 d-none d-md-inline">|</span>
        </div>
        <div className="social-links">
          <a
            href="https://www.facebook.com/share/1Bpf5Yrz6m/?mibextid=wwXIfr"
            target="_blank"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactBar;
