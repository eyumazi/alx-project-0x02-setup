import Card from "@/components/common/Card";
import "../styles/globals.css";
import Button from "@/components/layout/Button";

export default function Home() {
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

  return (
    <div>
      <br />
      <Card title="Beautiful Apartment" contents={cardContents} />
      <div className="mt-10"></div>
      <Button
        label="Click me"
        onClick={() => {
          alert("You clicked a button");
        }}
        type="button"
        className="Test-btn"
      />
    </div>
  );
}
