import React, { useState } from 'react';

const Banner = ({ donationData, setDonationData }) => {
  const [searchedItem, setSearchedItem] = useState('');

  const handleSearch = (e) => {
    setSearchedItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchedItem.trim() === '') {
      // If the search input is empty, reset the donationData to its original value
      setDonationData(donationData);
    } else {
      // Filter donationData based on the category
      const filteredData = donationData.filter((donation) =>
        donation.category.toLowerCase().includes(searchedItem.toLowerCase())
      );
      setDonationData(filteredData);
    }
  };

  return (
    <div
      className="relative bg-cover bg-center h-[70vh]"
      style={{
        backgroundImage: "url('/assets/Rectangle 4281.png')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-transparent bg-opacity-90 p-6 rounded-lg shadow-md">
          <h1 className="text-3xl text-white font-semibold mb-4">
            I Grow By Helping People In Need
          </h1>
          <form className="flex items-center" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search by category..."
              className="py-2 px-3 rounded-l-lg w-full focus:outline-none focus:ring focus:border-blue-300"
              onChange={handleSearch}
            />
            <button
              type="submit"
              className="bg-[#FF444A] hover:bg-blue-600 text-white py-2 px-4 rounded-r-lg focus:outline-none"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
