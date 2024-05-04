import React, { useState } from "react";
import "./about.css";
import ImageCard from './ImageCard';
import pravin from '../img/pravin.png'
import sam from '../img/sam.png'
import prathmesh from '../img/prathmesh.png'
import satwik from '../img/satwik.png'
function About() {
  const CardData = [
    {
      id : 1,
      imageSrc : pravin,
      name: "Pravin Nandankar",
      role: "Fronted Developer",
      linkedin : "https://www.linkedin.com/in/pravin-nandankar-a38910275/",
      insta:"https://www.instagram.com/pravin____x9/?igshid=MWZjMTM2ODFkZg%3D%3D",
      github:"https://github.com/pravin435916/",
    },
    {
      id : 2,
      imageSrc : sam,
      name: "Samiksha Agrawal",
      role: "Designer",
      linkedin : "",
      insta:"https://www.instagram.com/bansal_samiksha24/",
      github:"",
      
    },
    {
      id : 3,
      imageSrc : prathmesh,
      name: "Prathmesh Atkare",
      role: "Fronted Developer",
      linkedin : "https://www.linkedin.com/in/prathmesh-atkare-4436aa269/",
      insta:"https://www.instagram.com/atkareprathmesh14",
      github:"https://github.com/atkareprathmesh",
    },
    {
      id : 4,
      imageSrc : satwik,
      name: "Satvik Chandrakar",
      role: "Backend Developer",
      linkedin : "https://www.linkedin.com/in/satvik-chandrakar-4008471ba/",
      insta:"https://www.instagram.com/satvikchandrakar",
      github:"https://github.com/Satvik-ai",
    },
  ];
  return (
    <>
    <h1 id="img-h1">Our Team</h1>
    <div className="images">
      {CardData.map((card) => (
        <ImageCard
          key={card.id}
          imageSrc={card.imageSrc}
          name={card.name}
          role={card.role}
          linkedin={card.linkedin}
          insta={card.insta}
          github={card.github}
        />
      ))}
    </div>
    </>
  );
}
export default About;
