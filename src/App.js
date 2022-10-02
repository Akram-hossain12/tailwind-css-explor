import logo from './logo.svg';
import './App.css';
import Nav from './componants/Nav/Nav';
import PriceOption from './componants/priceOption/PriceOption';
import Priching from './componants/price/Priching';

function App() {
  return (
    <div className="App">
     <Nav></Nav>
     <Priching></Priching>
    </div>
  );
}

export default App;
