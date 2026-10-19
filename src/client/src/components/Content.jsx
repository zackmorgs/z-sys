import React from "react";

import "./styles/Content.scss";

export default function Content(props) {
  return (
    <div className={"content" + (props.className ? " " + props.className : "")}>
      {props.children}
    </div>
  );
}
