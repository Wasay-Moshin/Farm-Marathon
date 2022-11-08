import React from "react";
import { useLocation } from "react-router-dom";
function Carddata() {
    const { state } = useLocation();
  return (
    <div className="carddata">
      <div className="container">
        <div className="text-center mb-5">
            <img className="img-fluid" src={state.img} alt="" width={"140px"} />
        <div className="mt-3">
            <h1>{state.deposite}</h1>
        </div>
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

                  <div className="col-sm-6 col-6 mt-5">
                    <h3>MRACE</h3>
                  </div>
                </div>
                <hr className="mx-5" />
                <div className="row px-5">
                  <div className="col-sm-6 col-12">
                    <h6>Earned</h6>
                    <p>0.00</p>
                  </div>
                  <div className="col-sm-6 col-12  d-flex">
                    <button type="button" className="btn btn-primary">
                      Harvest
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-6 col-6 text-center ">
                    <img
                      className="img-fluid"
                      src={state.img}
                      alt=""
                      width={"140px"}
                    />
                  </div>

                  <div className="col-sm-6 col-6 mt-5">
                    <h3>{state.deposite}</h3>
                  </div>
                </div>
                <hr className="mx-5" />
                <div className="row px-5">
                  <div className="col-sm-6 col-12">
                    <h6>Staked</h6>
                    <p>0.00</p>
                  </div>
                  <div className="col-sm-6 col-12  d-flex">
                    <button type="button" className="btn btn-primary">
                      Approved
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carddata;
