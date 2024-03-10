import React from "react";
import { LeftPart } from "./leftPart";
import MainPart from "./mainPart";
import { RightPart } from "./rightPart";
import { DesignTop } from "./designTop";
import "./index.css";
export const Builder = () => {
  return (
    <div className="builder">
      <DesignTop />
      <div className="builderContent">
        <LeftPart />
        <RightPart />
        <MainPart />
      </div>
    </div>
  );
};
