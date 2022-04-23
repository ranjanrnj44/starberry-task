import React from "react";
import { useLocation, useHistory } from "react-router-dom";

function PropertyDetails() {
  //getting state value from router
  let { state } = useLocation();
  //history push
  let history = useHistory();
  console.log(state);
  return (
    <>
      <div className="container my-5" style={{ backgroundColor: "snow" }}>
        <div className="row row-container">
          {/* column 1 left */}
          <div className="col col-sm-12 col-md-6 col-lg-6 col-left p-0">
            <div className="card border-0">
              <img
                src="https://strapi-carolineolds.s3.eu-west-2.amazonaws.com/Property_for_sale_and_rent_in_Monaco_Caroline_Olds_4_f2ab697a87.jpg"
                className="card-img-top px-2"
                alt="..."
              />
              <div className="card-body d-flex justify-content-between p-1">
                <img
                  src="https://strapi-carolineolds.s3.eu-west-2.amazonaws.com/Property_for_sale_and_rent_in_Monaco_Caroline_Olds_4_f2ab697a87.jpg"
                  className="card-img-top p-1"
                  alt="..."
                  style={{ width: "50%", height: "10rem" }}
                />
                <img
                  src="https://strapi-carolineolds.s3.eu-west-2.amazonaws.com/Property_for_sale_and_rent_in_Monaco_Caroline_Olds_4_f2ab697a87.jpg"
                  className="card-img-top p-1"
                  alt="..."
                  style={{ width: "50%", height: "10rem" }}
                />
              </div>
            </div>
          </div>
          {/* column 1 right */}
          <div className="col col-sm-12 col-md-6 col-lg-6 col-right">
            <div className="d-flex justify-content-end">
              <i className="fa-solid fa-share m-1"></i>
              <i className="fa-solid fa-heart m-1"></i>
            </div>
            <hr />
            <div>
              <h6>
                &euro;{state.Price}{" "}
                <span className="smallFont">
                  {state.Bedrooms} bed | {state.Brochure[0].size} sqm
                </span>
              </h6>
            </div>
            <p className="smallFont">
              {" "}
              {state.Bedrooms} bedroom apartments for sale in {state.Area.Name}
            </p>
            <div
              className="d-flex align-content-center"
              style={{ color: "brown" }}
            >
              <i className="fa-solid fa-house-user"></i> &nbsp;
              <p className="smallFont">
                <u>Please contact us</u>
              </p>
            </div>
            <button
              type="button"
              className=" p-1 w-100 btn btn-dark btn-lg btn-block"
            >
              contact agent
            </button>

            <div className="feature">
              <br />
              <h6>FACTS & FEATURES</h6>
              <hr />
              <div className="container smallFont p-0">
                <div className="row">
                  <h6 className="col smallFont">Neighborhood:</h6>
                  <div className="col">{state.Area.Name}</div>
                </div>
                <div className="row">
                  <h6 className="col smallFont">Price per sqm:</h6>
                  <div className="col">&euro;{state.Price_Per_Sqm}</div>
                </div>
                <div className="row">
                  <h6 className="col smallFont">Brochure:</h6>
                  <div className="col">
                    <span>
                      <u>Download brochure</u>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <h6 className="col smallFont">Floor plan:</h6>
                  <div className="col">
                    <span>
                      <u>View Floorplan</u>
                    </span>
                  </div>
                </div>
              </div>
              {/* {state.Description.textContent} */}
              <br />
              <div className="smallFont d-flex">
                <img
                  src={state.Negotiator.Image.url}
                  style={{ width: "2rem", height: "2rem", marginRight: "2rem" }}
                />
                <div>
                  <h6>{state.Negotiator.Name}</h6>
                  <p>{state.Negotiator.Designation}</p>
                  <p>
                    {state.Negotiator.Phone} | {state.Negotiator.Email}
                  </p>
                </div>
              </div>
              <button
                type="button"
                className=" p-1 btn btn-primary btn-lg btn-block"
                onClick={() => history.push("/listingpage")}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyDetails;
