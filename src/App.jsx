import React, { useState } from "react";
import { Suspense } from "react";
const Home = React.lazy(() => import("./pages/Home"));
// import UseAnimations from "react-useanimations";
// import loading from "react-useanimations/lib/infinity";
// import ClipLoader from "react-spinners/ClipLoader";
import { BarLoader } from "react-spinners";

const App = () => {
  return (
    <Suspense
      fallback={
        <div className=" h-screen w-full flex items-center justify-center">
          {/* <UseAnimations animation={loading} size={60} /> */}
          <BarLoader color="#f6c400" height={4} />
        </div>
      }
    >
      <Home />
    </Suspense>
  );
};

export default App;
