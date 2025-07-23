import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getAllRestaurants } from "../api/place";

function AllRestaurants() {
    const [allData, setAlldata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllRestaurants();
                setAlldata(data.places);
            } catch (error) {
                setError(error?.message || "에러 발생");
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="w-full h-[600px] bg-amber-300 flex justify-center items-center">
            {isLoading && <div className="text-center"> 데이터 불러오는중 ....</div>}
            {error && <div className="text-center text-red-600 font-bold">에러 발생: {error}</div>}
            {!isLoading && !error && allData && allData.length > 0 && <Card data={allData} />}
        </div>
    );
}

export default AllRestaurants;
