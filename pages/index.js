/*import React, { useReducer, useEffect, useState } from "react";

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
}*/









//New


/*import React, { useReducer, useEffect, useState } from "react";

const initialState = { hotels: [], filteredHotels: [] };

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, hotels: action.payload, filteredHotels: action.payload };
    case "FILTER":
      const filteredHotels = state.hotels.filter(
        (hotel) => hotel.city === action.payload
      );
      return { ...state, filteredHotels };
    default:
      return state;
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [cityInput, setCityInput] = useState("");

 
  useEffect(() => {
    fetch("https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      })
  }, []);

 
  const handleCityChange = (event) => {
    const cityName = event.target.value;
    setCityInput(cityName);
    dispatch({ type: "FILTER", payload: city });
  };

  return (
    <div className="App">
      <h1>Hotel List</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={cityInput}
        onChange={handleCityChange}
      />
      {state.filteredHotels.map((hotel, index) => (
        <p key={hotel.hotel_name}>{hotel.hotel_name}</p>
      ))}
    </div>
  );
}*/







//Old

/*export default function Home() {
   const [state, dispatch] = useReducer(reducer, initialState);
   const [cityInput, setCityInput] = useState("");


  useEffect(() => {
    fetch("https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels")
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
}*/
  







//Newest


import React, { useReducer, useEffect } from "react";

const initialState = { hotels: [], filteredHotels: [] };

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
     return{...state, hotels: action.payload, filteredHotels: action.payload}
    case "FILTER":
     const filtered = state.hotels.filter((hotel)=>
      hotel.city.toLowerCase().includes(action.payload.toLowerCase())
     );
     return {...state, filteredHotels: filtered}
    default:
      return state;
  }
}
export function App() {
   const [state, dispatch] = useReducer(reducer, initialState);
   const [cityInput, setCityInput] = React.useState("");

  useEffect(() => {
    fetch('https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels')
    .then((response)=> response.json())
    .then((data)=>{
      // console.log(data)
      dispatch({type:"FETCH_SUCCESS", payload: data})
    })
    .catch((error)=>{
      console.error("Error fetching data:", error)
    })
  },[]);
    // console.log(state)

  const handleCityInputChange = (event)=>{
    setCityInput(event.target.value);
    dispatch({type:"FILTER", payload: event.target.value});
  }

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter city name"
        value={cityInput}
        onChange={handleCityInputChange}
      />
     
      <ul>
        {state.filteredHotels.map((hotel,index)=>(
          <li key={index}>{hotel.hotel_name}</li>
  ))}
      </ul>
     
    </div>
  );
  }
