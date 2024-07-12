import React from "react";
import { Tile } from "./Tile";

export const TileList = (props) => {
  const { objects } = props;
  return (
    <div>
      {objects.map((object, index) => {
        const { id, ...rest } = object;
        return (
          <Tile key={index} id={id} {...rest}/>
        );
      })}
    </div>
  );
};
