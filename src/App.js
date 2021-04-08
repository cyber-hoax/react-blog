import './App.css';
import Blog from './components/blog'
import Navbar from './components/Navbar'
import BlogPage from './components/BlogPage'
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import theme from './Theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className='App'>
          <Navbar />
        </div>
        <Switch>
          <Route exact path='/' component={Blog} />
          <Route exact path='/blog/:id' component={BlogPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
