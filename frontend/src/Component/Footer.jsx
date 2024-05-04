import React from "react";
import foot from "../img/foot.png";
import logo from "../img/logo.png";
import "./footer.css";
import { useAuth0 } from "@auth0/auth0-react";
function Footer() {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <div className="footer">
        <div className="b1">
          <img src={logo} alt="" />
          <span>
          Fed up of <strong>Crop failures </strong> and <strong>Poor Crops .</strong> <br />
              Don’t worry we’ve got you covered. <br /> Kisan Mitra is here, to let you
              know the problem, <br /> precautions and cure. Since, farmers work hard
              everyday to provide us <br /> staple food, this is a small effort to
              prevent their efforts from going into vain.
          </span>
          <button id='b21' onClick={() => loginWithRedirect()}>SIGN UP</button>
        </div>
        <div className="b2">
          <span>© 2023 Copyright: KisanMitra.com</span>
        </div>
        <div className="b3">
          <img src={foot} alt="footer" />
        </div>
      </div>
    </>
  );
}

export default Footer;
