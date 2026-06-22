import '../App.css';
import Header from '../components/Header';
import ContactBar from '../components/ContactBar';
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <ContactBar />
      <Carousel />
      <Services />
      <Portfolio />
      <About />
      <Footer />
      <ContactBar />
    </>
  );
}

export default Home;
