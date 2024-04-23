import React, { useState, useEffect } from 'react';


function HP() {
    var token = ZLfYaxdGF3Y3W5VX5pKfwSgC8gyoFexpROaxdAbaAqzPT8wlT3d9GRD2WYx9kS9K
    const [data, setData] = useState(null);
    const [name, setName] = useState(null);
    const generateRandomNumber = () => {
        const min = 1;
        const max = 1025;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const [rand, setRand] = useState(generateRandomNumber());
    useEffect(() => {
        fetch('http://api.pkmnapi.com/v1/pokemon/stats/'+ rand,{ headers:{'Authorization': 'Bearer ' + token}})
            .then((response) => response.json())
            .then((json) => setData(json.attributes.base_hp))
            .then((json) => setName(json.attributes.name))
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