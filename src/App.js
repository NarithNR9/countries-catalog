import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router >
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/test' element={'hi'} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
