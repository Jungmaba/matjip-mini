export const getAllRestaurants = async () => {
    try {
        const res = await fetch("http://localhost:3000/places");
        if (!res.ok) {
            if (res.status === 404) throw new Error("404 : 데이터를 찾을 수 없습니다.");
            // << 서버에서 각 오류에 대해서 설정안함 >>
            // if (res.status === 401) throw new Error("401 : 서버 인증 오류 입니다.");
            // if (res.status === 500) throw new Error("500 : 서버 내부 오류 입니다.");

            throw new Error(`${res.status} : error`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(" 데이터 불러오기 실패 : ", error);
        throw error;
    }
};
