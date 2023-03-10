import React from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/800.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);