import React from "react";

const colors = [
    {
    name: "hot pink",
    code: "FF69B4"
    },
    {
    name: "firebrick",
    code: "B22222"
    },
    {
    name: "light coral",
    code: "F08080"
    },
    {
    name: "orange",
    code: "FFA500"
    },
    {
    name: "pale golden rod",
    code: "EEE8AA"
    },
    {
    name: "dark olive green",
    code: "556B2F"
    },
    {
    name: "aqua marine",
    code: "7FFFD4"
    },
    {
    name: "medium orchid",
    code: "BA55D3"
    },
    {
    name: "royal blue",
    code: "4169E1"
    },
];

const Color = ({ onClick }) => {
    
    return (
        <div>
            {colors.map((color, index) => (
                    <button 
                        key={index} 
                        style={{backgroundColor: `#${color.code}`}}
                        onClick={() => onClick(color)}>
                        {color.code}
                    </button>
                   
                    ))}
        </div>
    )
}

export default Color;