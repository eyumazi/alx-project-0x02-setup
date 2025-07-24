import React from 'react'
import Card from "@/components/common/Card";
export const Home = () => {
  return (
    <div>
      <Card
        title="Beautiful Apartment"
        location="New York, NY"
        price="$120/n"
        rating={4.5}
        content={["Top Villa", "Self Checkin", "Free Reschedule"]}
        imageUrl="/assets/listing images/List 1.svg"
        iconsUrl={[
          "/assets/Icons/bed 1.svg",
          "/assets/Icons/bathtub 1.svg",
          "/assets/Icons/people 1.svg",
        ]}
      />
      <div>home Page</div>
    </div>
  );
}
export default Home;