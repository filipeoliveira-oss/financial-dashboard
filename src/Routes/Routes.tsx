import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <div className="AppRoute">
                        <Header/>
                        <h1 style={{color: 'white'}}>Carteira</h1>
                    </div>
                }/>
                <Route path="/daytrade" element={
                    <div className="AppRoute">
                        <Header/>
                        <h1 style={{color: 'white'}}>Day Trade</h1>
                    </div>
                }/>
                <Route path="/assets" element={
                    <div className="AppRoute">
                        <Header/>
                        <h1 style={{color: 'white'}}>Ativos</h1>
                    </div>
                }/>
            </Routes>
        </BrowserRouter>
    )
}