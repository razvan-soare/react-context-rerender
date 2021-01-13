import React from "react";
import { render } from "react-dom";
import registerServiceWorker from "./utils/registerServiceWorker";
import Routes from "./routes";
import AppProvider from "./store/provider";

import "./styles/normalize.css";
import "./styles/globalStyles";

render(
  <AppProvider>
    <Routes />
  </AppProvider>,
  document.getElementById("root")
);
registerServiceWorker();
