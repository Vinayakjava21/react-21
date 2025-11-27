import React from "react";
import ReactDOM from "react-dom/client";
import Header  from "./src/components/Header";
import Body from "./src/components/Body";







const AppComponent =() =>{
  return (
    <div>
  <Header/>;
  <Body/>
  </div>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<AppComponent />);
