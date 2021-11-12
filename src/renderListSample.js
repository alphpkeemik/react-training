import React from "react";

const fruits = ["avocado", "banana", "watermelon", "kiwi", "strawberry"];

function RenderListSample() {
    return (
        <div>
            {
                fruits.map((fruit, index) => {
                    return <div key={index}>{`${index + 1}. ${fruit}`}</div>
                })
            }
        </div>
    );
}

export default RenderListSample;