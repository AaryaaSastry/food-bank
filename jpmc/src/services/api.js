import axios from "axios";

export const fetchStats = async () => {
  const response = await fetch("http://localhost:5000/api/donations/stats");
  return await response.json();
};
