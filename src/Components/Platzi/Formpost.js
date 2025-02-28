import React, { useEffect } from "react";

function Formpost() {
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products/75", {
      method: "PUT",
      body: JSON.stringify({
        categoryId: 2,
        price: 900,
        title: "daaya",
        description: "this is a new data pasing",
        images: [
          "https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/b2c74200-8da7-439a-95b6-9cad1aa18742-4445-dubai-img-worlds-of-adventure-tickets-02.jpeg?auto=format&w=900&h=562.5&q=90&fit=crop&ar=16%3A10",
        ],
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return <div> Hello</div>;
}

export default Formpost;
