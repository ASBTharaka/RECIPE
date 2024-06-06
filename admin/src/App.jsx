// File: src/App.jsx
import React from 'react';
import Navbar from './components/navbar/navbar' ;
import Sidebar from './components/sidebar/sidebarx';
import {Routes,Route} from 'react-router-dom';
import  Add from './pages/Add/Add';
import List from './pages/List/List';
import Order from './pages/Order/Order';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add/>}/>
          <Route path="/list" element={<List/>}/>
          <Route path="/order" element={<Order/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
