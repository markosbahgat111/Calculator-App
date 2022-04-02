import * as ReactDOMClient from "react-dom/client";
import "./index.scss";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.css";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(<App />);
