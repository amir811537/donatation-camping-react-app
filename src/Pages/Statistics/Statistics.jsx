
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const Statistics = () => {
  const localStorageData = JSON.parse(localStorage.getItem("donations")) || [];
  const totalDonations = 12;

  const yourDonationPercentage = (
    (localStorageData.length / totalDonations) *
    100
  ).toFixed(0);

  const data = [
    { name: "Your Donation", value: Number(yourDonationPercentage) },
    { name: "Total Donation", value: 100 - Number(yourDonationPercentage) },
  ];

  const colors = ["#00C49F", "#FF444A"];

  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label={true}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value}%`} />
        </PieChart>
      </ResponsiveContainer>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ margin: "10px" }}>
          <p>Your Donation: {yourDonationPercentage}%</p>
        </div>
        <div style={{ margin: "10px" }}>
          <p>Total Donation: {100 - Number(yourDonationPercentage)}%</p>
        </div>
      </div>
      <Legend align="center" verticalAlign="bottom" />
    </div>
  );
};

export default Statistics;
