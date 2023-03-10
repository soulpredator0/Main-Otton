import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Signin from './components/SignIn';
import Signup from './components/SignUp';

function App() {
  return (
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Signin' element={<Signin/>} />
   </Routes>
  );
}

export default App;
