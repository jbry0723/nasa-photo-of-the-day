import React, {useState, useEffect} from "react";
import axios from "axios"
import "./App.css";
import moment from "moment"
import TitleDateBar from './TitleDateBar'
import ImgContainer from './ImgContainer'
import ExplainationBox from './ExplainationBox'

const BASE_URL="https://api.nasa.gov/planetary/apod?"
const currentDate=moment().format('YYYY-MM-DD')
const nasaKey="gchmnzUhxntLeN5dKZdO7i22j2Zy2aZyZu8LiPiT"


function App() {
  const [imgData,setImgData]=useState({})

  useEffect(()=>{
    const fetchData=(()=>{
  
    axios.get(`${BASE_URL}date=${currentDate}&api_key=${nasaKey}`)
    .then (res=>{
      console.log(res)
      setImgData(res.data)

    })
    .catch(err=>{
      console.log('error')
    })
  })
  fetchData()
},[])

  return (
    <div className="App">
     <TitleDateBar imgData={imgData} />
     <ImgContainer imgData={imgData} />
     <ExplainationBox imgData={imgData} />
    </div>
  );
}

export default App;
