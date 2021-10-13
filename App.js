import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 
import Home from './Pages/Home/Home';
import Info from './Pages/Info/Info';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/info" component={Info} />
        </Switch>
      </Router>
     
     </div>
  );
}

export default App;
