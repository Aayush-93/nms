import React from "react";
import { useParams } from "react-router";
// import { Bike } from "../dummy/Bike";
function ProductDetail() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1> Product details </h1>
      <h3> user id is:{id}</h3>
    </div>
  );
}

export default ProductDetail;
