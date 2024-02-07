import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import Holdings from "../Pages/Holdings/Holdings";
import { ThemeProvider } from "../Contexts/ThemeContext";

export default function AppRoutes(){
    return(
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <div className="AppRoute">
                            <Header/>
                            <Holdings/>
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
        </ThemeProvider>
        )
}