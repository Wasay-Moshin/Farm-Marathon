import React from "react";
import { FaMediumM } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaReddit } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <div>
              <h1>YOUR STEPS COUNT WITH Marathon!</h1>
            </div>
            <div>
              <img className="img-fluid" src="Assets/mobileapp.svg" alt="" />{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img className="img-fluid" src="Assets/mobileapp1.svg" alt="" />
            </div>
          </div>
          <div className="col-md-6 text-center">
            <div>
              <h1>Join Our Comunity</h1>
            </div>
            <div className="mt-5 d-flex justify-content-evenly">
              <FaMediumM size={"20px"} color={"grey"} />
              <FaTwitter size={"20px"} color={"grey"} />
              <FaTelegram size={"20px"} color={"grey"} />
              <FaDiscord size={"20px"} color={"grey"} />
              <FaInstagram size={"20px"} color={"grey"} />
              <AiFillGithub size={"23px"} color={"grey"} />
              <FaReddit size={"23px"} color={"grey"} />
              <FaFacebook size={"23px"} color={"grey"} />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg mt-5">
        <div className="row">
          <div className="col-md-6 text-center mt-3 mb-3">
            <img className="img-fluid" src="Assets/farmlogo.png" alt=""  width={"150px"}/>
          </div>
          <div className="col-md-6 text-center mt-3 mb-3">
          <p>Copyright © 2022 MarathonCash.Com Company All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
