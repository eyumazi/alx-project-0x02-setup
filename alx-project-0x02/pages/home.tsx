import React from "react";
import Card from "@/components/common/Card";

const cardContents = [
  {
    location: "New York, NY",
    price: "$120/n",
    rating: 4.5,
    reviews: ["Top Villa", "Self Checkin", "Free Reschedule"],
    imageUrl: "/assets/listing images/List 1.svg",
    iconsUrl: [
      "/assets/Icons/bed 1.svg",
      "/assets/Icons/bathtub 1.svg",
      "/assets/Icons/people 1.svg",
    ],
  },
  // Add more card objects here if needed
];

export const Home = () => {
  return (
    <div>
      <Card title="Beautiful Apartment" contents={cardContents} />
      <div>home Page</div>
    </div>
  );
};

export default Home;
