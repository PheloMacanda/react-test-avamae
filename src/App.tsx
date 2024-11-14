import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {
  return (
    <main className='App'>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </main>
  );
}

export default App;
