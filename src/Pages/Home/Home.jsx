import { useLoaderData } from 'react-router-dom';
import Cards from '../../Components/Cards/Cards';
import Banner from '../../Components/Header/Banner/Banner';
import { useState } from 'react';
import { Footer } from 'flowbite-react';

const Home = () => {
  const donations = useLoaderData();
  const [donationData, setDonationData] = useState(donations);

  return (
    <div>
      <Banner donationData={donations} setDonationData={setDonationData}></Banner>
      <Cards donationData={donationData}></Cards>
      <Footer></Footer>
    </div>
  );
};

export default Home;
