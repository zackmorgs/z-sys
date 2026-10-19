import React from "react";

import Content from "./Content";

export default function Hero(props) {
  return (
    <header id={props.id} className={props.className ? "hero " + props.className : "hero"}>
        <Content className="hero-content">
            {props.children}
        </Content>
    </header>
  );
}
