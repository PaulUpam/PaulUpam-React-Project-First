import { useEffect, useState } from "react";
import Card from "../components/Card";

const About = () => {
  const [user,setUser]=useState([]);
  const getUser=() =>{
    fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then((data)=> setUser(data.products))
  }
  console.log(user);

  useEffect(() =>{
    getUser();
  },[]);
  return (
    <>
    <div className="container mx-auto justify-center flex flex-wrap gap-3">
      {
        user.map((user,i) =>(<Card key={i} userInfo={user}/>))
      }
    </div>
    </>
  )}

export default About
