import "./App.css";
import Auth from "./components/auth/Auth";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Home/Dashboard";

import { authContext } from "./components/context/context";
import { useState } from "react";



function App() {

  const [authenticated, setAuthenticated] = useState(false);

  return (
    <>
    <authContext.Provider value={{authenticated, setAuthenticated}}>

      <Router>
        <Routes>


          <Route path="/" element={<Dashboard />} />
          <Route path="/auth" element={<Auth />} />

        </Routes>
      </Router>


    </authContext.Provider>
    </>
  );
}

export default App;
