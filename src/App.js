import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";



const FooterComponent = () => {
  return <div className="footer-container">Footer Component</div>;
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      {/* <FooterComponent /> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
