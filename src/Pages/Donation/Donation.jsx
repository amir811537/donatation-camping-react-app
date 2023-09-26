import { useEffect, useState } from "react";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [totadotations, setTotalDonation] = useState(0);

  useEffect(() => {
    const donationData = JSON.parse(localStorage.getItem("donations"));

    if (donationData && donationData.length > 0) {
      setDonations(donationData);

      const total = donations.reduce(
        (preValue, currentItem) => preValue + currentItem.price,
        0
      );

      console.log(total);
      setTotalDonation(total);
    }
  }, []);
  const handelremove = () => {
    localStorage.clear();
    setDonations([]);
  };

  return (
    <div className="">
      {donations.length > 0 && (
        <div>
          <button
            onClick={handelremove}
            className="btn py-3 px-3 text-white rounded bg-[#009444] block mx-auto "
          >
            Delate All data
          </button>
          <h1>Total price:{totadotations}</h1>
        </div>
      )}

      <br />
      <br />

      {donations.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {isShow
            ? donations.map((donate) => (
                <div
                  key={donate.id}
                  className="relative flex  max-w-[48rem] mb-4 rounded-xl bg-clip-border shadow-md"
                  style={{ backgroundColor: donate.card_bg }}
                >
                  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                      src={donate.picture}
                      alt={donate.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex justify-start">
                      <span
                        className="rounded-md"
                        style={{ backgroundColor: donate.card_bg }}
                      >
                        <p
                          className="text-xl"
                          style={{
                            backgroundColor: donate.category_bg,
                            padding: "5px",
                            borderRadius: "5px",
                            color: donate.text_button_bg,
                          }}
                        >
                          {donate.category}
                        </p>
                      </span>
                    </div>

                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                      {donate.title}
                    </h4>

                    <p>{donate.price}</p>
                    <button
                      className="btn py-2 px-2 rounded text-white"
                      style={{ backgroundColor: donate.text_button_bg }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))
            : donations.slice(0, 4).map((donate) => (
                <div
                  key={donate.id}
                  className="relative flex  max-w-[48rem] mb-4 rounded-xl bg-clip-border shadow-md"
                  style={{ backgroundColor: donate.card_bg }}
                >
                  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                      src={donate.picture}
                      alt={donate.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex justify-start">
                      <span
                        className="rounded-md"
                        style={{ backgroundColor: donate.card_bg }}
                      >
                        <p
                          className="text-xl"
                          style={{
                            backgroundColor: donate.category_bg,
                            padding: "5px",
                            borderRadius: "5px",
                            color: donate.text_button_bg,
                          }}
                        >
                          {donate.category}
                        </p>
                      </span>
                    </div>

                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                      {donate.title}
                    </h4>

                    <p>{donate.price}</p>
                    <button
                      className="btn py-2 px-2 rounded text-white"
                      style={{ backgroundColor: donate.text_button_bg }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
        </div>
      ) : (
        <p className="h-[80vh] flex justify-center items-center">
          No data added
        </p>
      )}

      {donations.length > 4 && (
        <button
          onClick={() => setIsShow(!isShow)}
          className="btn py-3 px-3 text-white rounded bg-[#009444] block mx-auto"
        >
          {isShow ? "see less" : "see All"}
        </button>
      )}
    </div>
  );
};

export default Donation;
