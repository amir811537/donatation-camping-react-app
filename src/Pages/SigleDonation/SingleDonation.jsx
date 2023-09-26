import { useEffect, useState } from "react";
import { json, useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const SingleDonation = () => {
  const handelAddToDonation = () => {
    const addDonation = [];
    const donationamaount = JSON.parse(localStorage.getItem("donations"));
    if (!donationamaount) {
      addDonation.push(sigleDonation);
      localStorage.setItem("donations", JSON.stringify(addDonation));
      swal("Good job!", "You send your donation!", "success");
    } else {


const isExits =donationamaount.find(donation =>donation.id == id)
if(!isExits){
    addDonation.push(...donationamaount, sigleDonation);
    localStorage.setItem("donations", JSON.stringify(addDonation));
    swal("Good job!", "You send your donation!", "success");
}else{
    swal("error!", "You alreay send your donation", "error");
}

    
    }
  };

  const [sigleDonation, setSingleDonation] = useState({});
  const { id } = useParams();
  const donationbyid = useLoaderData();

  useEffect(() => {
    const FindDonation = donationbyid?.find(
      (sigleDonation) => sigleDonation.id === id
    );
    setSingleDonation(FindDonation);
  }, [id, donationbyid]);
  //   console.log(sigleDonation);

  return (
    <div className="relative">
      {sigleDonation && (
        <>
          <img src={sigleDonation.picture} alt="" className="w-full" />
          <div className="">
            <button
              onClick={handelAddToDonation}
              className="btn rounded px-2 py-3 text-white absolute   lg:top-[750px] lg:left-[40px]  "
              style={{ backgroundColor: sigleDonation.text_button_bg }}
            >
              Donate now : {sigleDonation.price}
            </button>
          </div>
        </>
      )}

      <div className=" py-12 md:py-5 lg:py-7 ">
        <h2 className="text-2xl font-bold">
          {sigleDonation ? sigleDonation.category : "Loading..."}
        </h2>
      </div>

      <p
        className="text-gray-800
    "
      >
        {sigleDonation ? sigleDonation.description : "Loading..."}
      </p>
    </div>
    // <div>

    // </div>
  );
};

export default SingleDonation;
