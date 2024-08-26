import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routing from "./Routing.tsx";
import Header from "./component/header.tsx";
import "./styles/App.css";
import "./styles/reset.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Header />
        <Routing />
    </StrictMode>
);
