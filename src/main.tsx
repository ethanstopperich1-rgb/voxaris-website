import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;
const prerendered = document.documentElement.dataset.prerendered === "true";

if (prerendered) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
