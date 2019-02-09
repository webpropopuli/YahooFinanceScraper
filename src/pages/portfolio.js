import React from "react";
import SweepBtn from "../components/sweeper";

function Portfolio({ user }) {
  // use lookup on user to fill data
  return (
    <div>
      <h3>{`Yahoo Portfolio History for ${user}`}</h3>
      <p>This is where we keep the bodies....please wipe your feet.</p>

      <SweepBtn />
    </div>
  );
}

export default Portfolio;
