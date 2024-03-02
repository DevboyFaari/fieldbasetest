import React from "react";
import "./Body.css";

const Body = () => {
  return (
    <div className="parent-div">
      <img src="/Bodyimage.png" alt="background" className="body-image" />
      <div className="blue-hue"></div>
      <div className="logo">
        <img src="Fieldbaseimage.png" alt="logo" />
        <a href="login">Log in</a>
      </div>
      <p>
        Optimise Machine Performance And Predict Problems Before
        <br /> They Turn Into Disasters
      </p>
      <h4>
        R-Monitor is a best-in-class remote sensor monitoring system that allows
        you to keep an eye on your critical assets. You’ll be able to monitor
        their condition, predict problems, stay proactive, and reduce your
        operation costs.
      </h4>
      <button className="quote-button">Get a Quote</button>
    </div>
  );
};

export default Body;
