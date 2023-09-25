import { useEffect, useState } from "react";

const Donation = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    // Retrieve donations from local storage
    const donationData = JSON.parse(localStorage.getItem("donations"));

    if (donationData && donationData.length > 0) {
      setDonations(donationData);
    }
  }, []);

  return (
    <div>
      {donations.length > 0 ? (
        <div>
          {donations.map((donate) => (
            <div key={donate.id}>
              <img src={donate.picture} alt={donate.title} />
              <h2>{donate.title}</h2>
              <p>{donate.description}</p>
              <p>Category: {donate.category}</p>
              <p>Price: {donate.price}</p>
              {/* Add more details as needed */}
              <button style={{ backgroundColor: donate.text_button_bg }}>
                Donate
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="h-[80vh] flex justify-center items-center">No data added</p>
      )}
    </div>
  );
};

export default Donation;
