import React from "react";
import { RequirementProps } from "./types";
import { CustomLi, SuccessLi } from "./useStyles";

const Requirement = ({
  text,
  condition,
  showNotSatisfied,
}: RequirementProps) => {
  return (
    <>
      {condition ? (
        <SuccessLi>&#10003; {text}</SuccessLi>
      ) : (
        <CustomLi notSatisfied={showNotSatisfied}>
          {showNotSatisfied ? <span>&#10005;</span> : <span>&#8226;</span>}{" "}
          {text}
        </CustomLi>
      )}
    </>
  );
};

export default Requirement;
