import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
// import home1 from "../img/home1.png";
import home2 from "../img/hom2.gif";
import Input from "./input";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { AiFillPlayCircle } from "react-icons/ai";
import { PiPlantFill } from "react-icons/pi";
import { GiPlantSeed, GiReceiveMoney } from "react-icons/gi";
import { CgSearchFound } from "react-icons/cg";
import About from "./About";
import ContactPage from "./ContactPage";
import pattern2 from "../img/pattern2.png";
import pattern1 from "../img/pattern1.png";
import header from "../img/header.png";
import tri from "../img/tri.png";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";
import { motion } from "framer-motion";
// import Language from './Language'
function Home() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      {/* <div id="google_translate_element"> */}
      <div className="container">
        <ScrollToTop />
        <img id="one" src={header} alt="" />
        <img id="two" src={pattern1} alt="" />
        <div className="first-box">
          <img src={pattern2} alt="pattern" />
          <div className="text">
            <motion.span
              initial={{ x: "-100%" }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Every Kisan's मित्र !
            </motion.span>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span>
              {" "}
              Fed up of{" "}
              <strong>
                Crop diseases <PiPlantFill />
              </strong>{" "}
              and{" "}
              <strong>
                Poor crops <GiPlantSeed />.
              </strong>
            </span>{" "}
            <br />
            Don’t worry we’ve got you covered. <br /> Kisan Mitra is here, to
            let you know the problem, precautions and cure. Since, farmers work
            hard everyday to provide us staple food, this is a small effort to
            prevent their efforts from going into vain.
          </motion.p>
          <span id="own">Know your plant a little better !</span>
          <div className="btns">
            <Link to="/Input">
              <button id="btn1">
                <span>Get Started</span>
              </button>
            </Link>
            <span id="play">
              <a href="https://drive.google.com/file/d/16xzxN3qDbt6tnwrFiWJxmNf74gewKQQj/view?usp=sharing" target="blank"><AiFillPlayCircle /></a>
              
            </span>
          </div>
        </div>
        <div className="card-co">
          <motion.img
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            id="imgs"
            src={home2}
            alt=""
          />
        </div>
      </div>
      <div className="steps">
        <div className="left">
          <p>
            Plants play a crucial role in supplying food globally. Various
            environmental factors lead to plant diseases which results in
            significant production losses. However, manual detection of plant
            diseases is a time-consuming and error-prone process due to the fact
            that symptoms are not always apparent, either through visual
            inspection or computer analysis. It can be an unreliable method of
            identifying and preventing the spread of plant diseases. Emergence
            of accurate techniques in the field of leaf based image
            classification has shown impressive results.
          </p>
          <span>
            <strong>
              Our model uses ML algorithm for identifying between healthy and
              diseased leaf. Our solution gives us a clear way to detect the
              disease present in plants in a colossal scale.
            </strong>
          </span>
        </div>
        <div className="right">
          <img id="tri" src={tri} alt="" />
          <motion.div
            initial={{ opacity: -2 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="bx"
          >
            <span>
              <PiPlantFill />
            </span>
            <span>Plant pathology</span>
            <span>
              "AI technologies have recently been applied to the field of plant
              pathology for identifying plant abnormalities and infestations.
              These technologies can have the capability to transform the method
              in which plant maladies are identified, diagnosed, and managed🤖"
            </span>
          </motion.div>
          <div className="r-2">
            <motion.div
              initial={{ opacity: -2 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1, ease: "easeOut" }}
              className="bx"
            >
              <span>
                <CgSearchFound />
              </span>
              <span>Early Identification</span>
              <span>
                "By adopting these advanced technologies, farmers and plant
                disease specialists can detect diseases at an early stage,
                preventing further spread and reducing the risk of crop
                losses.🌱🕵️‍♂️ "
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: -2 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1, ease: "easeOut" }}
              className="bx"
            >
              <span>
                <GiReceiveMoney />
              </span>
              <span>Cost Reduction</span>
              <span>
                "The use of ML and DL techniques in plant disease detection can
                reduce the need for manual labor and the cost of plant disease
                detection. This can be useful for farmers and small-scale
                agricultural operations who may not have access to expensive
                equipment or specialized expertise."
              </span>
            </motion.div>
          </div>
        </div>
      </div>
      <Input />
      <About />
      <ContactPage />
      {/* <Language/> */}
      <Footer />
      {/* </div> */}
    </>
  );
}

export default Home;
