
import './App.css';
import Responsivedrawer from './Responsivedrawer'
import { Route  , BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
    {/* hi nisha */}
     <Responsivedrawer />
     {/* <Navbar /> */}
     {/* <Router>
        <Route path="/" exact component={Navbar} />
      </Router> */}
    </div>
  );
}

export default App;
