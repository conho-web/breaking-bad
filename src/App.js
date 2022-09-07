import './App.scss';
import Header from './components/organisms/Header/Header';
import Catalog from "./components/organisms/Catalog/Catalog";
import Footer from './components/organisms/Footer/Footer';

function App() {
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
