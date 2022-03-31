import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import User from './components/User';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/user/:user' element={<User/>}>
        </Route>
      </Routes>
    </Router>
    
  );
}

export default App;
