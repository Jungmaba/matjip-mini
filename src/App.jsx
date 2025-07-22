import { useState } from "react";
import "./App.css";
import AllRestaurants from "./components/Allrestaurants";

function App() {
    return (
        <>
            <div className="w-full h-screen">
                <AllRestaurants />
            </div>
        </>
    );
}

export default App;
