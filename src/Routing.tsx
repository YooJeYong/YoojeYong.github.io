import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./component/content";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Content />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
