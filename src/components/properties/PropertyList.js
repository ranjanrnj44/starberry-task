import React, { useEffect, useState } from "react";
//axios
import axios from "axios";
//nanoid - unique key
import { nanoid } from "nanoid";
//react skeleton
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

function PropertyList() {
  //initialState
  let [data, setData] = useState([]);
  console.log(data);
  let [loading, setLoading] = useState(false);

  //test- get image // path fails to load, skipping image settings, for now keeping a static image
  let images = data && data.map((item) => item.Images);

  let all_images = images.map((i) => i.map((i) => i.url));

  let extract_image = all_images.map((i) => i[0]);
  console.log(extract_image);

  //after initial render
  useEffect(() => {
    //apiCall
    let apiCall = async () => {
      setLoading(true);
      let response = await axios.get(
        "https://carolineolds-strapi-dev.q.starberry.com/properties?_limit=50"
      );
      //console.log(response.data);
      setData(response.data);
      setLoading(false);
      //console.log(response.data.map((item) => item.floorpath));
    };
    apiCall();
  }, []);

  //skeleton template
  let SkeletonTemplate = ({ listsToRender }) => {
    return (
      <SkeletonTheme
        color="#202020"
        highlightColor="#444"
        className="d-flex flex-wrap"
      >
        {Array(listsToRender)
          .fill(1)
          .map(() => (
            <section className="m-1">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <Skeleton height={200} />
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <Skeleton height={35} />
                <Skeleton height={25} />
                <Skeleton height={20} />
              </div>
            </section>
          ))}
      </SkeletonTheme>
    );
  };

  //data
  let LoadedData = () => {
    return (
      <div
        className="container-fluid card-cover d-flex flex-wrap"
        style={{ backgroundColor: "snow" }}
      >
        {data.map((item) => (
          <div className="col-lg-4 col-md-6 col-sm-12 p-4" key={nanoid()}>
            <div className="card">
              <Link
                to={{
                  pathname: `/details/${item.id}`,
                  state: item,
                }}
              >
                {/* skipping image settings, for now keeping a static image */}
                <img
                  src={
                    "https://strapi-carolineolds.s3.eu-west-2.amazonaws.com/Property_for_sale_and_rent_in_Monaco_Caroline_Olds_4_f2ab697a87.jpg"
                  }
                  className="card-img-top"
                  alt="..."
                />
              </Link>
              <div className="card-body text-center">
                <h6 className="card-title text-secondary">
                  {item.Area.Name.toUpperCase()}
                </h6>
                <p className="card-text text-secondary">
                  {item.Bedrooms >= 1
                    ? `${item.Bedrooms} apartment for sale`
                    : "Apartment soled out"}
                </p>
                <h5 className="text-dark">{item.Price}&euro;</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {loading ? <SkeletonTemplate listsToRender={50} /> : <LoadedData />}
        </div>
      </div>
    </>
  );
}

export default PropertyList;
