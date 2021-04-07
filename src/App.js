import './App.css';
import Blog from './components/blog'
import Navbar from './components/Navbar'
import BlogPage from './components/BlogPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
      </div>
      <Switch>
        <Route exact path='/' component={Blog } />
        <Route exact path='/blog' component={BlogPage} />
      </Switch>
    </Router>
  );
}

export default App;
