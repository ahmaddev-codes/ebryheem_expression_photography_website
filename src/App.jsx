import './App.css';
import Header from '../src/components/header/Header';
import Story from '../src/components/story/Story';
import Workfolio from '../src/components/workfolio/Workfolio';
import About from '../src/components/about/About';
import Contact from '../src/components/contact/Contact';
import Footer from '../src/components/footer/Footer';

function App() { 
  return (
    <div className='App'>
      <Header />
      <Story />
      <Workfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  ); 
};

export default App;       