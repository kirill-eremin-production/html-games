import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./icefall.css";
import Game from "./Game";
import { store } from "./store";

createRoot(document.getElementById("app")!).render(
  createElement(Provider, { store, children: createElement(Game) }),
);
