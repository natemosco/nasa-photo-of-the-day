import React, {useState, useEffect} from "react";
import axios from "axios";
import Card from "./components/Card"
import "./App.scss";

function App() {
  const [nasaData, setNasaData] = useState({});
  useEffect( ()=> {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(response =>{
      console.log("nasa data response",response);
      setNasaData(response.data);
    })
    .catch(error =>{
      console.log("there was an error and nasa data not imported", error);
    })
  },[])
  

  return (
    <div className="App">
      <Card {...nasaData}
            // copyright = {nasaData.copyright}
            // date = {nasaData.date}
            // explanation = {nasaData.explanation}
            // hdurl = {nasaData.hdurl}
            // title = {nasaData.title}/>
            //url = {nasaData.url}
            ></Card>
    </div>  
  );
}


export default App;
