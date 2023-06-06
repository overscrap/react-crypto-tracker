import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Price from "./routes/Price";
import Chart from "./routes/Chart";

interface IRouterProps {
}
function Router({}:IRouterProps) {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/:coinId/*" element={<Coin isDark={isDark} />}></Route> */}
                <Route path="/:coinId" element={<Coin />}>
                    <Route path={`price`} element={<Price />}></Route>
                    <Route path={`chart`} element={<Chart />}></Route>
                </Route>
                <Route path="/" element={<Coins />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;