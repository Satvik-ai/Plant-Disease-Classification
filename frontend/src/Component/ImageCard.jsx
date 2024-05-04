import React, { useState } from 'react';
import './about.css';
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai';
import {BsInstagram} from 'react-icons/bs';
import {motion} from 'framer-motion'
function ImageCard({ imageSrc, name, role,linkedin,github,insta }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
    <motion.div 
    initial={{ scale: 0.9,opacity:0 }}
    whileInView={{ scale: 1,opacity:1}}
    transition={{ duration: 0.5, ease: 'easeOut' }}
     className="img-box">
    <div
      className={`image-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageSrc} alt={name} />
      <div className="card-content">
        <div className="icons">
        <span> <a href={linkedin} id='a1'><AiFillLinkedin/></a></span>
        <span> <a href={insta} id='a2'><BsInstagram/></a></span>
        <span> <a href={github} id='a3'><AiFillGithub/></a></span>
        </div>
        <p>{role}</p>
      </div>
    </div>
    <span>{name} </span>
    </motion.div>
    </>
  );
}

export default ImageCard;
