import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Signin from './components/SignIn';
import Signup from './components/SignUp';
// import Signup from './components/SignUp';

function App() {
  return (
   <Routes>
    <Route path='/home' element={<Home/>} />
    <Route path='/Signin' element={<Signin/>} />
    <Route path='/' element={<Signup/>} />
   </Routes>
  );
}

export default App;
