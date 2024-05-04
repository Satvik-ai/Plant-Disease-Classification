// import React, { useState } from "react";
// import './input.css'
// import { LuUploadCloud } from 'react-icons/lu';
// import plant from '../img/plant.png'
// import { useAuth0 } from "@auth0/auth0-react";
// function Input() {
//   const { loginWithRedirect } = useAuth0();
//   const [image, setImage] = useState(null);
//   const [diagnosis, setDiagnosis] = useState(null);

//   // Function to handle image upload and analysis
//   const handleImageUpload = async (event) => {
//     const uploadedImage = event.target.files[0];
//     if (!uploadedImage) return;

//     setImage(URL.createObjectURL(uploadedImage));
//     setDiagnosis("Your plant looks healthy.");
//   };

//   return (
//     <>
//     <h1 id="head">Get it a Try </h1>
//     <div className="homepage">
//       <div className="box1">
//         <div className="text2">
//         <h1 id="h1">How to Identify a plant ?</h1>
//         <span>We use cutting edge methods of machine learning (AKA artificial intelligence) and train customized deep convolutional neural networks to ensure the best possi ble results. We estimate that in 90% of cases, we offer the right answer. Check our blog for a more detailed evaluation.</span>
//         </div>
//         <img src={plant} alt="" />
//       </div>
//       <div className="box2">
//         <p>Upload a photo of your plant </p>
//         <p>You have used all your free tries. <a href="" onClick={() => loginWithRedirect()}> Sign in </a>  to continue.</p>
//         <div className="input-box">
//           <span><LuUploadCloud/></span>
//           <span id="up-text">Click Here for Upload image</span>
//         <input className="input" type="file" accept="image/*"onChange={handleImageUpload} />
//         </div>
//         {image && <img src={image} alt="Uploaded plant" width={10} />}
//         <button id="btni">Identify</button>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Input;
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./input.css";
import { LuUploadCloud } from "react-icons/lu";
import Potato from "../img/potatoo.png";
import groundnut from "../img/groundnut.jpeg";
import tomata from "../img/tomata.jpeg";
import pepper from "../img/pepper.jpg";
import blackgram from "../img/blackgram.png";
import { motion } from "framer-motion";
function Input() {
  const [image, setImage] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState([]);
  const [per, setPer] = useState([]);
  const [err, setErr] = useState(null);
  const [url, setUrl] = useState('');

  const onFileChange = (event) => {
    const uploadedImage = event.target.files[0];
    setSelectedFile(uploadedImage);
    if (!uploadedImage) return;
    setImage(URL.createObjectURL(uploadedImage));
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    axios
      .post(`http://localhost:8000/predict/${url}`, formData)
      .then((response) => {
        console.log(response);
        const obj = response.data;
        // setData(JSON.stringify(obj));
        setData(obj.class);
        setPer(obj.confidence);
      });
  };

  const clearData = () => {
    setSelectedFile(null);
    setImage(false);
    setData(null);
    setPer(null);
  };

  return (
    <>
      <h1 id="head">Give it a try </h1>
      <div className="buttons">
        <h1 id="sel">Select a plant</h1>
        <div className="btns">
          <button onClick={() => setUrl('potato') }> <img src={Potato} alt="" /></button>
          <button onClick={() => setUrl('tomato') }><img src={tomata} alt="" /></button>
          <button onClick={() => setUrl('pepper') }><img src={pepper} alt="" /></button>
          <button onClick={() => setUrl('groundnut') }><img src={groundnut} alt="" /></button>
          <button onClick={() => setUrl('blackgram') }><img src={blackgram} alt="" /></button>
        </div>
      </div>
      <input type="button" value="" />
      <div className="homepage">
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="box1"
        >
          {!image && (
            <div>
              <p style={{textAlign:"center"}}>Upload a photo of your <strong>{url} plant </strong></p>
              <div className="input-box">
                <span>
                  <LuUploadCloud />
                </span>
                <span id="up-text">Click Here for Upload image</span>
                <input
                  className="input"
                  type="file"
                  accept="image/*"
                  onChange={onFileChange}
                />
              </div>{" "}
            </div>
          )}
          {image && <img id="upload-img" src={image} alt="Uploaded plant" />}
          <div className="btn-box">
            <button id="btni" onClick={onFileUpload}>
              Identify
            </button>
            <button id="btni" onClick={clearData}>
              Clear Data
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="box2"
        >
          <div className="text2">
            <h1 id="h1">Result</h1>
            <span id="d">
              {" "}
              <strong>Disease :</strong> {data}
            </span>{" "}
            <br />
            <span id="c">
              {" "}
              <strong>Confidence :</strong> {(per * 100).toFixed(2)}%
            </span>
          </div>
          {data == "Anthracnose" && (
            <div className="treat">
              <h1>Treatment</h1>
              <ul>
                <li>Remove Affected Parts</li>
                <li>Fungicide Application</li>
              </ul>
            </div>
          )}
          {data == "Leaf Crinckle" && (
            <div className="treat">
              <h1>Treatment</h1>
              <ul>
                <li>Remove Affected Parts</li>
                <li>Control Aphid Vectors</li>
                <li>Plant Virus-free Seed</li>
              </ul>
            </div>
          )}
          {data == "Powdery Mildew" && (
            <div className="treat">
              <h1>Treatment</h1>
              <ul>
                <li>Remove Affected Parts</li>
                <li>Fungicide Application</li>
                <li>Air Circulation</li>
              </ul>
            </div>
          )}
          {data == "Yellow Mosaic" && (
            <div className="treat">
              <h1>Treatment</h1>
              <ul>
                <li>Remove Affected Parts</li>
                <li>Control Whitefly Vectors</li>
                <li>Plant Virus-Free Seed</li>
              </ul>
            </div>
          )}
          {data == "Early Blight" && (
            <div className="treat">
              <h1>Treatment</h1>
              <ul>
                <li>Proper Fertilization</li>
                <li>Irrigation</li>
                <li>Management of other pests</li>
              </ul>
            </div>
          )}
          {data == "Late Blight" && (
            <div className="treat">
              <h1>Treatment</h1>
              <ul>
                <li>Apply Fungicides</li>
                <li>Management of other pests</li>
              </ul>
            </div>
          )}
          {data == "Mosaic Virus" && (
            <div className="treat">
              <h1>Treatment</h1>
              <ul>
                <li>Remove Affected Parts</li>
                <li>Control Whitefly Vectors</li>
                <li>Plant Virus-Free Seed</li>
              </ul>
            </div>
          )}
          {data == "YellowLeaf Curl Virus" && (
            <div className="treat">
              <h1>Treatment</h1>
              <ul>
                <li>Remove Affected Parts</li>
                <li>Control Whitefly Vectors</li>
                <li>Plant Virus-Free Seed</li>
              </ul>
            </div>
          )}
          {data == "Bell Bacterial Spot" && (
            <div className="treat">
              <h1>Treatment</h1>
              <ul>
                <li>Copper Sprays</li>
              </ul>
            </div>
          )}
          {data == "Early Leaf Spot" && (
            <div className="treat">
              <h1>Treatment</h1>
              <ul>
                <li>Apply Fungicides or Neem Oil</li>
              </ul>
            </div>
          )}
          {data == "Early Rust" && (
            <div className="treat">
              <h1>Treatment</h1>
              <ul>
                <li>Remove Affected Parts</li>
              </ul>
            </div>
          )}
          {data == "Late Leaf Spot" && (
            <div className="treat">
              <h1>Treatment</h1>
              <ul>
                <li>Crop rotation with non-host crops preferably cereals</li>
              </ul>
            </div>
          )}
          {data == "Nutrition Deficiency" && (
            <div className="treat">
              <h1>Treatment</h1>
              <ul>
                <li>Application of 250kg/Ha Gypsum</li>
              </ul>
            </div>
          )}
          {data == "Rust" && (
            <div className="treat">
              <h1>Treatment</h1>
              <ul>
                <li>Remove Affected Parts
                  
                </li>
              </ul>
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
}

export default Input;
