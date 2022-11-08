import React from "react";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="text-center mb-4">
            <h1>FARM</h1>
            <p style={{color:"#a5abb3"}}>Stake your tokens to earn more $MRACE.</p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-6 col-6 text-center ">
                    <img
                      className="img-fluid"
                      src="Assets/logo-cr.png"
                      alt=""
                      width={"140px"}
                    />
                  </div>

                  <div className="col-sm-6 col-6 mt-2">
                    <h3>Your MRACE Balance</h3>
                    <p>0.00</p>
                  </div>
                </div>
                <hr className="mx-5" />
                <div className="row px-5">
                  <div className="col-sm-6 col-12">
                    <h6>Pending Harvest</h6>
                  </div>
                  <div className="col-sm-6 col-12  d-flex">
                    <strong>0.00 </strong> &nbsp;
                    <h6> MRACE</h6>
                  </div>
                </div>
                <div className="row px-5">
                  <div className="col-sm-6 col-12 ">
                    <h6>Daily Output of MRACE</h6>
                  </div>
                  <div className="col-sm-6 col-12  d-flex">
                    <strong>0.00 </strong> &nbsp;
                    <h6> MRACE</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-4 col-12">
                    <img
                      className="img-fluid"
                      src="Assets/GMT94.png"
                      alt=""
                      width={"140px"}
                    />
                  </div>

                  <div className="col-sm-4 mt-4 col-12">
                    <p>APY: 500%</p>
                  </div>
                  <div className="col-sm-4 col-12">
                    <img
                      className="img-fluid"
                      src="Assets/logo-cr.png"
                      alt=""
                      width={"140px"}
                    />
                  </div>
                </div>
                <hr className="mx-5" />
                <div className="row px-5">
                  <div className="col-sm-3">
                    <h5>Earn</h5>
                  </div>
                  <div className="col-sm-3">
                    <h5 style={{color:"black"}}>GMT</h5>
                  </div>
                  <div className="col-sm-3">
                  <h5>DEPOSIT</h5>
                  </div>
                  <div className="col-sm-3">
                    
                    <h5 style={{color:"black"}}> MRACE</h5>
                  </div>
                </div>
                <div className="text-center mt-2 ">
                <button type="button" class="btn btn-primary">Select</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
