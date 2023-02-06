import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './Pages.jsx/Admin';
import Home from './Pages.jsx/Home';
import User from './Pages.jsx/User';

function App() {
  return (
    <div>
      <Home/>
      <Routes>
        <Route path="/Admin" element={<Admin Type="Admin" />}/>
        <Route path="/User" element={<User Type="User" />}/>
      </Routes>
    </div>
  );
}

export default App;
