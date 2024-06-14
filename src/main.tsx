import ReactDOM from "react-dom/client";
import React from "react";
import { Provider as ReduxProvider, useSelector } from "react-redux";

import store from "./state-container/store";
import App from "./App";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
);
