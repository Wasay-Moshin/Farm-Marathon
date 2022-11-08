import React from "react";
import { useNavigate} from "react-router-dom"
import data from "../Utils/Card-data.json"
function Stakepool() {
    const navigate = useNavigate()
  return (
    <div className="stakepool">
      <div className="container">
        <div className="mt-3 mb-4">
            <h1>Choose Your Stake Pool</h1>
        </div>
        <div className="row">
            {data.map(i=>( <div className="col-md-3"  >
            <div className="card">
              <div className="card-body">
                <div className="text-center">
                  <img src={i.img} alt="" width={"90px"} />
                  <div className="mt-3">
                    <p>{i.name}</p>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-sm-6">
                    <h6>Deposit</h6>
                  </div>
                  <div className="col-sm-6">
                    <h6 style={{color:"black"}}>{i.deposite}</h6>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-sm-6">
                    <h6>Earn</h6>
                  </div>
                  <div className="col-sm-6">
                    <h6 style={{color:"black"}}>MRACE</h6>
                  </div>
                </div>
                <hr />
                <div className="text-center">
                <button type="button" class="btn btn-primary" onClick={()=>navigate("/carddata", {state:i})}>Select</button>
                </div>
              </div>
            </div>
          </div> ))}
         
        </div>
      </div>
    </div>
  );
}

export default Stakepool;
