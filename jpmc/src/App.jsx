import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './signup.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './login.jsx';
import Dashboard from './dashboard.jsx';
import Initial from './initial.jsx';
import Mapping from './mapping.jsx';
import DonateNow from "./DonateNow";
import ThankYou from "./ThankYou";
import Volunteers from './vol.jsx'; 
;




function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Default redirect to /login */}
          <Route path="/" element={<Navigate to="/initial" />} />

          {/* Other Routes */}
            <Route path="/initial" element={<Initial />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/mapping" element={<Mapping />} />
          <Route path="/donate" element={<DonateNow />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/volunteers" element={<Volunteers />} />

          {/* Catch-all route for 404 */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
