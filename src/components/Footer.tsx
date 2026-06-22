import '../App.css';

function Footer() {
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="social-links mb-3"></div>
            <p>
              &copy; {getCurrentYear()} Cooley Land Service. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
