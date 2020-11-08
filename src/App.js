import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Routing from './Config/Routing';
import Navbar from './Components/StickyComponents/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routing />
      </Router>
    </div>
  );
}

export default App;
