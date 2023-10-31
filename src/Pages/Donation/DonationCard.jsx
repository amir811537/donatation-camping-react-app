import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
  // Destructure the 'donation' prop directly
  const {
    id,
    category_bg,
    picture,
    title,
    category,
    card_bg, // Use 'card_bg' property for background color
    text_button_bg,
    description,
    price,
  } = donation || {};
  const textColor = {
    color: text_button_bg || "red",
  };
  // Define an inline style object to set the background color
  const cardStyle = {
    backgroundColor: card_bg || "transparent", // Use 'card_bg' or fallback to transparent
  };
  const textstyle = {
    backgroundColor: category_bg || "transparent",
  };

  return (
 <Link to={`/donation/${id}`}>
 
 <div
      className="relative flex flex-col rounded-xl bg-clip-border text-gray-700 shadow-md"
      style={cardStyle}
    >
      <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img
          src={picture || "https://via.placeholder.com/400"}
          className="h-full w-full object-cover"
          alt={title || "Product Image"}
        />
      </div>

      <div className="flex justify-start px-8 py-5 ">
        <span className="bg-white p-2 rounded-md" style={textstyle}>
          <p className="text-xs" style={textColor}>
            {category} 
          </p>
        </span>
      </div>

      <div className="p-6">
        <div className=" flex justify-between">
          <p className="  font-bold  text-xl " style={textColor}>
            {title}
          </p>
        </div>
      </div>
    </div>
 
 </Link>
  );
};

export default DonationCard;
