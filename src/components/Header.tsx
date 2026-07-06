import '../App.css';

function Header() {
  // Helper function to handle smooth scrolling without changing the URL hash
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleScroll = (e: any, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a
            style={{ fontFamily: 'Joshyfont' }}
            className="navbar-brand"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Cooley Land Service
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href=""
                  onClick={(e) => handleScroll(e, 'services')}
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href=""
                  onClick={(e) => handleScroll(e, 'portfolio')}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href=""
                  onClick={(e) => handleScroll(e, 'about')}
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
