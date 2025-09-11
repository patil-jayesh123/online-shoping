import React from "react";
import { Link } from "react-router-dom";
import Prod from "./Prod";

const Home = () => {
  return (
    <>
      <img src="./assets/h.jpg" style={{ width: "100%", height: "" }} />

      <Link to="/Product" class="btn btn-primary position-absolute top-50 start-50 translate-middle px-4 py-2">
        Shop Now
      </Link>
      <Prod/>
    </>
  );
};

export default Home;
