import './App.css';
import FirstCardImage from './components/FirstCardImage';
import FirstHeader from './components/FirstHeader';
import HeaderContent from './components/HeaderContent';
import ImagesComponent from './components/ImagesComponent';
import NavBarComponent from './components/NavBarComponent';

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <ImagesComponent />
      <FirstHeader />
      <HeaderContent />
      <div className='Cards'>
        <FirstCardImage
          img="./katie.png"
          rating="5"
          reviewCount="6"
          country="USA"
          title="Life lessons with Katie Zafferehes"
          price="$136"
        />
        <FirstCardImage
          img="./wedding-photography 1.png"
          rating="5.0"
          reviewCount="(30)"
          country="USA"
          title="Learn wedding photography"
          price="From $125 / person"
        />
        <FirstCardImage
          img="./mountain-bike 1.png"
          rating="4.8"
          reviewCount="2"
          country="USA"
          title="Group Mountain Biking"
          price="$50"
        />
      </div>

    </div>
  );
}

export default App;
