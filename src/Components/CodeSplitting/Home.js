import React, { Suspense } from "react";
// import AboutUs from "./AboutUs";
const About = React.lazy(() => import("./AboutUs"));

function Home() {
  return (
    <div>
      <h2> this is a home component</h2>
      <Suspense fallback={<h1>loading...</h1>}>
        <About />
      </Suspense>
    </div>
  );
}

export default Home;
