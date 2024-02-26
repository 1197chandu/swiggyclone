import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="title" tabIndex="1">
    Namste React
  </h1>
);

const HeadingComponent = () => (
  <div>
    <Title />
    <h1 className="heading">Hellow Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
