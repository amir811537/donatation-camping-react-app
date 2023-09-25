import DonationCard from "../../Pages/Donation/DonationCard";


const Cards = ({donations}) => {
    // console.log(donations)
    return (
        <div>
           
            <h2 className="text-xl  py-5 font-bold text-center">All Cards Here </h2>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10 ">


        {
            donations?.map(donation =><DonationCard donation={donation} key={donation.id}></DonationCard>)
        }
       </div>
       
        </div>
    );
};

export default Cards;