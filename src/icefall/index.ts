import { createElement } from "react";
import { createRoot } from "react-dom/client";
import "./icefall.css";
import Game from "./Game";

createRoot(document.getElementById("app")!).render(createElement(Game));
