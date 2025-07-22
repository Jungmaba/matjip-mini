import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getAllRestaurants } from "../api/place";

function AllRestaurants() {
    const [allData, setAlldata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllRestaurants();
                setAlldata(data.places);
            } catch (error) {
                console.log("데이터 호출 실패 : ", error);
            } finally {
                setIsLoading(false);
            }
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
        <div className="w-full bg-amber-300">
            {isLoading ? <div className="text-centerㅎ"> 데이터 불러오는중 ....</div> : <Card data={allData} />}
        </div>
    );
}

export default AllRestaurants;
