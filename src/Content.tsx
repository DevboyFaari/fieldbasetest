import React from "react";
import "./Content.css";

const Content = () => {
  return (
    <div className="content">
      <div className="blue">
        <img src="clock.png" alt="clock" className="clock" />
        <span>Monitor assets</span>
        <p>
          Look over your personalised dashboard for trends, patterns and issues
          to make better-informed decisions that result in long-term efficiency
          and growth!
        </p>
        <div className="one">
          <img src="link.png" alt="link" className="clock" />
          <span className="clock2">Relaible Transmission </span>
          <p className="second">
            No matter where you are, you’ll always be able to get information
            about the field situation from your sensors by using satellite and
            GSM networks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
