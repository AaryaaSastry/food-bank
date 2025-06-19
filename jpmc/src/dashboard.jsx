import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <button onClick={() => navigate("/mapping")}>📈 View Donation Impact</button> {/* ✅ STEP 5 */}
    </div>
  );
};

export default Dashboard;
