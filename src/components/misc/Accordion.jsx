import React from "react";
import { P1 } from "../../styles/styles.text";
export const Accordion = () => {
  return (

    <>
      <button type="button" class="collapsible">
        Open
      </button>
      <div class="content">
        <P1>Lorem ipsum...</P1>
      </div>
    </>
  );
};
