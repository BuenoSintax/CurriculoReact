import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Experiencia from './components/Pages/Experiencia';
import Formacao from './components/Pages/Formacao';
import Competencias from './components/Pages/Competencias';
import Interesses from './components/Pages/Interesses';
import Navbar from './components/Navbar';
import ErrorPage from './components/Pages/ErrorPage';
import Home from './components/Pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    
      <div className="App" class="bg-slate-300">

        <Router>
          <Navbar />
            <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/experiencia" exact component={Experiencia} />
               <Route path="/formacao" exact component={Formacao} />            
               <Route path="/competencias" exact component={Competencias} />
               <Route path="/interesses" exact component={Interesses} />
               <Route component={ErrorPage} />
            </Switch>
        <Footer/>
        </Router>
      </div>
  

  );
}

export default App;
