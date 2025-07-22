export const getAllRestaurants = async () => {
    try {
        const res = await fetch("http://localhost:3000/places");
        if (!res.ok) throw new Error("sever error");
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(" 데이터 불러오기 실패 : ", error);
        return [];
    }
};
