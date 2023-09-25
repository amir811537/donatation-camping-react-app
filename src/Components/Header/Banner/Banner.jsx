const Banner = () => {
  return (
   

    <div
      className="relative bg-cover bg-center h-[70vh]"
      
      style={{
        backgroundImage: "url('/public/assets/Rectangle 4281.png')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-transparent bg-opacity-90 p-6 rounded-lg shadow-md">
          <h1 className="text-3xl  text-white font-semibold mb-4">
          I Grow By Helping People In Need
          </h1>
          <form className="flex items-center">
            <input
              type="text"
              placeholder=" Search here......."
              className="py-2 px-3 rounded-l-lg w-full focus:outline-none focus:ring focus:border-blue-300"
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
