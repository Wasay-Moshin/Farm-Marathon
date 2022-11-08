import React from "react";
import { IoWallet } from "react-icons/io5";
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <div>
              <img
                className="img-fluid"
                src="Assets/logo.png"
                alt=""
                width={"450px"}
              ></img>
            </div>
          </a>
          <div className="c justify-content-end">
            <ul className="navbar-nav  mt-2 mb-2 mb-lg-0">
              <button type="button" className="btn btn-danger">
                {/* <img className="img-fluid" src="Assets/wallet.svg" alt="" />
                 */}
                <IoWallet className="icon" />
                <b> Connect Wallet</b>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
