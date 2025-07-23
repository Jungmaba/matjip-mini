import React from "react";

const Card = ({ data }) => {
    return (
        <div className="flex flex-wrap gap-5 justify-center items-center">
            {data.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col justify-center w-[200px] h-[250px] rounded-xl bg-gray-200 p-2"
                >
                    <img
                        src={`http://localhost:3000/${item.image.src}`}
                        alt={item.image.alt}
                        className="w-full h-[150px] object-cover"
                    />
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Card;
