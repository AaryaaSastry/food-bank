import React, { useEffect, useState } from "react";
import { fetchStats } from "./services/api";
import { Bar } from "react-chartjs-2";


import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Mapping = () => {
  const [stats, setStats] = useState({ totalMeals: 0, donorCount: 0, donations: [] });

  useEffect(() => {
  const loadStats = async () => {
    const data = await fetchStats();
    console.log("Fetched data:", data); // ✅ STEP 2: Debug
    setStats(data);
  };
  loadStats();
  }, []);

  const chartData = {
    labels: stats.donations.map(d => d.donorName),
    datasets: [
      {
        label: "Meals Provided",
        data: stats.donations.map(d => d.mealsProvided),
        backgroundColor: "rgba(75,192,192,0.6)"
      }
    ]
  };

  return (
  <div style={{ padding: "20px" }}>
    <h2>📊 Donation Impact Dashboard</h2>
    <p>Total Meals: {stats.totalMeals}</p>
    <p>Total Donors: {stats.donorCount}</p>

    {stats.donations.length > 0 ? (
      <Bar data={chartData} />
    ) : (
      <p>No donations available to display chart.</p> // ✅ STEP 4
    )}
  </div>
);

};

export default Mapping;
