import React from "react";
import CardHub from "./card";

const Cardlist = props => (
  <div>
    {props.profiles.map(profiles => (
      <CardHub key={profiles.id} {...profiles} />
    ))}
  </div>
);

export default Cardlist;
