import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';

function App() {
  return (
    <Home />
  );
}

export default App;
