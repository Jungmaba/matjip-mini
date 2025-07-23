import { useEffect } from "react";
import { useState } from "react";

export function useCurrentLocation() {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            setError("위치 정보를 찾을 수 없습니다.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                setLocation({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                });
                console.log(location);
            },
            (error) => {
                setError("위치 정보 권환 허용 필요");
                console.error("위치 접근 에러 : ", error);
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0,
            }
        );
    }, []);

    return { location, error };
}
