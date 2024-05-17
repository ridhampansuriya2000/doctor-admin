import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Dashboard from './components/Dashboard';
import Login from './components/Common/Login';
import Routes from "./routes";

function App() {

  return (
    <>
      {/* <Login/> */}
        <Routes />
    </>
  );
}

export default App; 