import React from 'react';
import './Catering.css'; // Import the CSS file for styling
import { assets } from '../../assets/assets';

const Catering = () => {
  return (
    <div className="catering-container" id='catering'>
      <h1 className='start-tag'>Explore Our Catering Services</h1>
      <h2>Cooking Delicious Food since 2024</h2>
      <div className="catering-cards">
        <div className="catering-card">
          <img src={assets.marriage_party} alt="Marriage Party" />
          <h3>Marriage Party</h3>
          <p>Starting at a reasonable price</p>
          <p>
            Indulge in a curated selection of exquisite dishes, crafted with premium ingredients to make your special day unforgettable. Our catering service is dedicated to delivering a delightful dining experience for you and your guests at every moment of your celebration.
          </p>
          <button>Learn More</button>
        </div>
        <div className="catering-card">
          <img src={assets.birthday_party} alt="Birthday Party" />
          <h3>Birthday Party</h3>
          <p>Starts with negotiable price</p>
          <p>
            Enjoy a birthday celebration filled with delightful dishes crafted from premium ingredients by our expert chefs. Our catering service promises to satisfy your guests’ cravings and make the event memorable with every delicious bite.
          </p>
          <button>Learn More</button>
        </div>
        <div className="catering-card">
          <img src={assets.private_party} alt="Private Party" />
          <h3>Private Party</h3>
          <p>Starting at the best discount</p>
          <p>
            Enjoy a personalized menu crafted with premium ingredients and culinary expertise, perfect for elevating your private party experience. Let us cater to your unique tastes and make your event unforgettable with every delicious bite.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Catering;
