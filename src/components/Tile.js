import React from "react";

export const Tile = (props) => {
  const {id, ...rest} = props;
  const restEntries = Object.entries(rest);
  return (
    <div className="tile-container">
      <h3 className="tile-title">
        {id}
        {restEntries.map(([key, value], index) => (
        <p key={index} className="tile">
          {key}: {value}
        </p>
      ))}
      </h3>
    </div>
  );
};
