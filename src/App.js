import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/S1/home1';
import Signin from './pages/sign in/signin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Signin />} path='/sign-in' />
        <Route element={<Signin />} path='/sign-up' />
      </Routes>
    </div>
  );
}

export default App;
