import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getAllRestaurants } from "../api/place";

function AllRestaurants() {
    const [allData, setAlldata] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllRestaurants();
            setAlldata(data.places);
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log("데이터:", allData);
        if (allData.length > 0) {
            console.log("첫 번째 맛집:", allData[0].name);
        }
    }, [allData]);

    return (
        <div>
            <div className="w-full h-1/2 bg-amber-300">
                <Card allData={allData} />
            </div>
        </div>
    );
}

export default AllRestaurants;
