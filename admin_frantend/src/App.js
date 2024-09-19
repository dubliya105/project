import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import ShowEnquiry from './components/ShowEnquiry';
import StudentFullDetails from './components/StudentFullDetails';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/enquiry' element={<Registration/>}/>
      <Route path='/showEnquiry' element={<ShowEnquiry/>}/>
      <Route path='/fullDtails/:id' element={<StudentFullDetails/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
