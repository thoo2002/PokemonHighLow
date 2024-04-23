import React, { useState, useEffect } from 'react';


function HP() {
    const [data, setData] = useState(null);
    const generateRandomNumber = () => {
        const min = 1;
        const max = 1025;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const [rand, setRand] = useState(generateRandomNumber());
    useEffect(() => {
        fetch('https://v1/pokemon/stats/'+ rand)
            .then((response) => response.json())
            .then((json) => setData(json.attributes.base_hp))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            {data ? (
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
}

export default HP;