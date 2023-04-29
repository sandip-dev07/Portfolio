import React, { useState } from "react";
import { Suspense } from "react";
const Home = React.lazy(() => import("./pages/Home"));
import UseAnimations from 'react-useanimations';
import loading from 'react-useanimations/lib/infinity'

const App = () => {
  return (
    <Suspense fallback={<div className=" h-screen w-full flex items-center justify-center"><UseAnimations animation={loading}
    size={60} /></div>}>
      <Home />
    </Suspense>
  );
};

export default App;
