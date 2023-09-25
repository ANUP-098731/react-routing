import './App.css';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Allbar from './components/Allbar';
import Services from './components/Services';
import Blog from './components/Blog'


function App() {
  return (
    <div className="App">
        <Router>
        <Allbar/>
      

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          
          
        </Routes>
    </Router>
    </div>
  );
}

export default App;
