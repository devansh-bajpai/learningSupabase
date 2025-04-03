import './App.css';
import Auth from './components/auth/Auth';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Dashboard from './components/Home/Dashboard';

function App() {
  return (
    <>
    <Router>

    <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/auth' element={<Auth/>}/>

    </Routes>


    </Router>

    
    </>
  );
}

export default App;
