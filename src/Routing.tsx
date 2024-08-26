import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./component/content";

function Router() {
    return (
        // <BrowserRouter basename={process.env.PUBLIC_URL}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Content />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
