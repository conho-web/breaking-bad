import './App.scss';
import Header from './components/organisms/Header';
import Catalog from "./components/organisms/Catalog";
import Footer from './components/organisms/Footer';

let App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="App">
        <div className="container">
          <Catalog />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
