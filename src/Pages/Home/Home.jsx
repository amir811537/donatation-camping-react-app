import { useLoaderData } from "react-router-dom";
import Cards from "../../Components/Cards/Cards";
import Banner from "../../Components/Header/Banner/Banner";


const Home = () => {


const donations =useLoaderData()
// console.log(donation)

    return (
        <div>
           <Banner></Banner>
           <Cards donations={donations}></Cards>
        </div>
    );
};

export default Home;