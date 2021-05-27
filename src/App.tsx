import React from "react";
import Routings from "./components/Routings";
import {routings} from "./appRoutings";

function App() {
  return (
      <Routings routings={routings}/>
  );
}

export default App;
