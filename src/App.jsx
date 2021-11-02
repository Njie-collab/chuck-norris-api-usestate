import React from "react";
import "./App.css";
import { useState, useEffect, useRef } from "react";


const App = () => {
  const [dark, setDark] = useState(null);
  const[jokes,setJokes]=useState[0]

  const inputRef = useRef();

  useEffect(() => {
    
   const api_url = "https://api.chucknorris.io/jokes/categories";

    const fetchData = async () => {
      try {
        const response = await fetch(api_url);
        const json = await response.json();
        console.log(json);
        setDark(json)
      } catch (error) {
        console.log("error", error);
      }
      inputRef.current=dark
    };

    fetchData();
  }, []);

  useEffect(()=>{
    const api_url2 =
      "https://api.chucknorris.io/jokes/random?category={category}";
   
  const fetchData = async () => {
    try {
      const response = await fetch(api_url2);
      const json = await response.json();
      console.log(json);
      setJokes(json);
    } catch (error) {
      console.log("error", error);
    }
    inputRef.current = jokes;
  };

  fetchData();
    

  },[setJokes]);

  /*
  const api_url2 =
    "https://api.chucknorris.io/jokes/random?category={category}";
  const response = await fetch(api_url2);
  const json = await response.json;
  setJokes(json);*/



  const focus =()=>{
    inputRef.current.focus()
  }

    
  return (
    <div>
      <h1>App Loading......{}</h1>
      <input 
      type="text" 
      value="name"
       onChange={e=>setDark(e.target.value)} />
      <button onClick={focus} >Focus</button>
    </div>
  );
};

export default App;
