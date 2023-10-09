import React, { useReducer, useEffect, useState } from "react";

const initialState = { hotels: [], filteredHotels: [] };

function reducer(state, action) {
  switch (action) {
    case "FETCH_SUCCESS":
      return { ...state, hotels: action.payload };
    case "FILTER":
      const filteredHotels = state.hotels.filter(
        (hotel) => hotel.city === action.payload
      );
    default:
     return state;
  }
}





export default function Home() {
   const [state, dispatch] = useReducer(reducer, initialState);
   const [cityInput, setCityInput] = useState("");


  useEffect(() => {
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    })
  }, []);


  const handleCityChange = (e) => {
    const city = e.target.value;
    setCityInput(city);
    dispatch({ type: "FILTER", payload: city });
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter city name"
        value={cityInput}
        onChange={handleCityChange}
      />
     {state.filteredHotels.map((hotel) => (
        <p key={hotel.hotel_name}>{hotel.hotel_name}</p>
     ))}
    </div>
  );
}
  
