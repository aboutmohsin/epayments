import React, { useState } from "react";
import "./search.css";
import { HotelDetails } from "./HotelDetails";
const Search = () => {
  // const [input, setInput] = useState({});
  const [query, setQuery] = useState("");

  const onChangeValue = (e) => {
    e.preventDefault();
    // const value = e.target.value;
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  // const {query} =useG
  return (
    <>
      <div className="container">
        <div className="search_hotels">
          <h1>Search Hotels</h1>
          <form action="">
            <div className="search_fields">
              <input
                type="text"
                placeholder="Search Here...."
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </form>
        </div>
        {HotelDetails.filter(
          (hotels) =>
            hotels.city.toLowerCase().includes(query) ||
            hotels.name.toLowerCase().includes(query)
        ).map((hotels) => (
          <div className="search_card">
            <div className="hotel_details">
              <div className="hotel_image">
                <img src="/images/hotel.jpg" alt="hotel image" name="hotel" />
              </div>
              <div className="hotel_description">
                <h1 className="hotel_name" key={hotels.id}>
                  {hotels.name}
                </h1>
                <p className="hotel_location">{hotels.city}</p>
                <p className="hotel_location">{hotels.location}</p>
                <p className="hotel_feature">{hotels.description}</p>
                <span className="number_of_rooms">{hotels.numberOfRooms}</span>
                <p className="hotel_price">{hotels.price}</p>

                <div className="btn btn-hotel">
                  <button>See Hotel</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Search;
