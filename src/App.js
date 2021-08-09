import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="App">
       
        <Router>
        <Navigation/>
        <Switch>
          <Route path="/" exact component={MovieList} />
          <Route path="/login" exact component={Login} />
          <Route path = "/add" exact component={AddMovie}/>
          <Route path="/:id" render={(props) => <MovieDetails {...props}/>}/>
        </Switch>
        </Router>
        
       
    </div>
  );
}

export default App;
