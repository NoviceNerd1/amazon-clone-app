import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"; // ✅ Import BrowserRouter
import "./index.css";
import App from "./App.jsx";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        {" "}
        {/* ✅ Wrap App inside Router */}
        <App />
      </Router>
    </StateProvider>
  </StrictMode>
);
