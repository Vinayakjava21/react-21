import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
    <div className="logo">
      <img
        src="https://i.pinimg.com/736x/fc/25/de/fc25de953bd113877f9f0dc37e8a8337.jpg"
        width="200"
        alt="logo"
      />
      <h2>Food App</h2>
    </div>
    <div className="nav">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
    </div>
    </div>
  );
};

const resList = [
  {
    "id": 101,
    "name": "Vidyarthi Bhavan",
    "rating": 4.7,
    "cuisine": ["South Indian", "Breakfast"],
    "deliveryTime": "30 mins",
    "priceForTwo": 200,
    "imageUrl": "https://wallpaperaccess.com/full/6340448.jpg",
    "location": "Basavanagudi, Bengaluru",
    "isOpen": true,
    "offers": "20% off up to ₹50"
  },
  {
    "id": 102,
    "name": "Meghana Foods",
    "rating": 4.6,
    "cuisine": ["Biryani", "Andhra"],
    "deliveryTime": "35 mins",
    "priceForTwo": 400,
    "imageUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/6/6/5f5b503d-cd27-4eb8-8ffe-0faf1a5716c4_02c2beab-d74d-4cc4-9569-4dd1cc785959.jpg",
    "location": "Indiranagar, Bengaluru",
    "isOpen": true,
    "offers": "Flat ₹100 off"
  },
  {
    "id": 103,
    "name": "Truffles",
    "rating": 4.5,
    "cuisine": ["Burgers", "American"],
    "deliveryTime": "25 mins",
    "priceForTwo": 500,
    "imageUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/9/18/81c36907-e1a4-4c9c-9dbc-b73519cd27c7_9703f30b-8f87-4d5c-8322-2f4dda2bc71f.JPG",
    "location": "Koramangala, Bengaluru",
    "isOpen": true,
    "offers": "Buy 1 Get 1"
  },
  {
    "id": 104,
    "name": "Empire Restaurant",
    "rating": 4.3,
    "cuisine": ["North Indian", "Kebabs"],
    "deliveryTime": "40 mins",
    "priceForTwo": 450,
    "imageUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/9/25/808869c7-2e94-4090-afdb-15d5118a9b8e_63e954d1-8ac6-4fa6-aa12-a8bb35b3399b.jpg",
    "location": "MG Road, Bengaluru",
    "isOpen": false,
    "offers": "Free delivery"
  },
  {
    "id": 105,
    "name": "Byg Brewski Brewing Company",
    "rating": 4.8,
    "cuisine": ["Continental", "Brewery"],
    "deliveryTime": "50 mins",
    "priceForTwo": 1200,
    "imageUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/9/2/d0e22b12-3877-4929-ad3c-550741489e60_2dc99725-e06a-44d9-b943-8afd6e625cea.jpg",
    "location": "Sarjapur Road, Bengaluru",
    "isOpen": true,
    "offers": "15% off on weekends"
  }
];


const RestuarantCards=(props)=>{
    const {resData} = props;
  return (
    <div className="rest-card">
      <img className="img" src={resData.imageUrl}></img>
      {/* <div> */}
           

      <h3>{resData.name}</h3>
      <h3>{resData.deliveryTime}</h3>
      
      <h3>{resData.cuisine.join(",")}</h3>
      <h3>{resData.rating}</h3>
      
      {/* </div> */}

    </div>
  )
}
const Body=()=>{
  return (
    <div className="body">
    <div className="search">Search</div>
    <div className="rest-container">
      {resList.map((restuarant)=>(
        <RestuarantCards key = {restuarant.id} resData = {restuarant} />
      ))}

    </div>
    </div>
  )
}

const AppComponent =() =>{
  return (
    <div>
  <Header/>;
  <Body/>
  </div>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<AppComponent />);
