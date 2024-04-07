import React, {useEffect, useState } from 'react';
import Axios from "axios";

const App= () => {
  const [Data,setData]=useState("");

  const getData=async()=>{
    const response=await Axios.get("https://www.figma.com/file/LraUgEIm4PndiQvp8Q4emk/house-prediction?type=design&node-id=0%3A1&mode=design&t=jU7o6nIsakbg5yX7-/getData")
    setData(response.data);
}
  
  useEffect(()=>{
    getData()
  },[]);
  return (
    <div>{data}</div>
  )
}

export default App