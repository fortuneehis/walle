import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SolSandbox } from './sandboxes/sol-sandbox';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <ToastContainer theme="dark" />
      <SolSandbox />
    </Router>
  );
}

export default App;
