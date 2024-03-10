import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import { Route, Routes } from 'react-router-dom';
import { FrontPage } from './pages/FrontPage';
import { StudentDash } from './pages/student/StudentDash';
import { AdminDash } from './pages/admin/AdminDash';
import Login from './components/Login';
import { AdminLogin } from './pages/admin/AdminLogin';
import { Studentsignup } from './pages/student/Studentsignup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<FrontPage/>} />
        {/* admin routes */}
        <Route path='/admindash' element={<AdminDash/>}/>
        <Route path='/admilogin' element={<AdminLogin/>}/>
        
      
        {/* student routes */}
        <Route path='/studentdash' element={<StudentDash/>}/>
        <Route path='/studentsignup' element={<Studentsignup/>}/>
      </Routes>
    </div>
  );
}

export default App;
