import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getAllRestaurants } from "../api/place";
import { useCurrentLocation } from "../hooks/useCurrentLocation";
import { sortPlacesByDistance } from "../utils/loc";

function AllRestaurants() {
    const [allData, setAlldata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { location, error: locationError } = useCurrentLocation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!location) return;
                const data = await getAllRestaurants();
                const sorted = sortPlacesByDistance(data.places, location.lat, location.lon);
                setAlldata(sorted);
                console.log(
                    "정렬 순서:",
                    sorted.map((p) => `${p.title} (${p.id})`)
                );
            } catch (error) {
                setError(error?.message || "에러 발생");
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [location]);

    return (
        <div className="w-full h-[600px] bg-amber-300 flex justify-center items-center">
            {isLoading && <div className="text-center"> 데이터 불러오는중 ....</div>}
            {locationError && <div className="text-center text-red-600 font-bold">{locationError}</div>}
            {!location && !locationError && <div className="text-center">위치 정보를 불러오는 중...</div>}
            {error && <div className="text-center text-red-600 font-bold">에러 발생: {error}</div>}
            {!isLoading && !error && allData && location && allData.length > 0 && <Card data={allData} />}
        </div>
    );
}

export default AllRestaurants;
