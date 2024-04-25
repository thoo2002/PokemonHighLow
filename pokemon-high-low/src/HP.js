import React, { useState, useEffect } from 'react';


function HP() {
    var token = 'ZLfYaxdGF3Y3W5VX5pKfwSgC8gyoFexpROaxdAbaAqzPT8wlT3d9GRD2WYx9kS9K';
    const [data, setData] = useState(null);
    const [name, setName] = useState(null);
    const [img, setImg] = useState(null);
    const [pkm1, setPkm1] = useState({
        name: 'bulbasaur',
        stat: 45,
        img: 'none',
    });
    useEffect(() => {
        setPkm1({
            name: getPkmnName(),
            stat: getPkmnStat(),
            img: getPkmnImg(),
        }
    )});

    const [pkm2, setPkm2] = useState({
        name: 'bulbasaur',
        stat: 45,
        img: 'none',
    });
    const [counter, setCounter] = useState(0);

    const generateRandomNumber = () => {
        const min = 1;
        const max = 1025;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const [rand, setRand] = useState(generateRandomNumber());
    function getPkmnStat(){
        fetch('http://api.pkmnapi.com/v1/pokemon/stats/'+ rand,{ headers:{'Authorization': 'Bearer ' + token}})
            .then((response) => response.json())
            .then((json) => setData(json.data[0].attributes.base_hp))
            .catch(error => console.log(error));
    };

    function getPkmnImg() {
        fetch('http://api.pkmnapi.com/v1/pokemon/pics'+ rand,{ headers:{'Authorization': 'Bearer ' + token}})
            .then((response) => response.json())
            .then((json) => setImg(json.data[0].attributes.front))
            .catch(error => console.log(error));
    };

    function getPkmnName() {
        fetch('http://api.pkmnapi.com/v1/pokemon/names/'+ rand,{ headers:{'Authorization': 'Bearer ' + token}})
            .then((response) => response.json())
            .then((json) => setName(json.data[0].attributes.name))
            .catch(error => console.log(error));
    };

    function ComparisonHigher() {
        console.log(pkm1);
        console.log(pkm2);
        if (pkm1.stat >= pkm2.stat){
            setCounter(counter + 1);
            setPkm1(pkm2);
            setPkm2({
                name: getPkmnName(),
                stat: getPkmnStat(),
                img: getPkmnImg(),
            });
        }
        else{
            setCounter(0);
        }
    }

    function ComparisonLower(){
        if (pkm1.stat <= pkm2.stat){
            setCounter(counter + 1);
            setPkm1(pkm2);
            setPkm2({
                name: getPkmnName(),
                stat: getPkmnStat(),
                img: getPkmnImg(),
            });
        }
        else{
            setCounter(0);
        }
    }
    return (
        <div>
            <h1>High Low</h1>
            <h2>{pkm1.name}</h2>
            <img src={pkm1.img} alt="Pokemon" />
            <button onClick={() => ComparisonHigher()}>Higher</button>
            <button onClick={() => ComparisonLower()}>Lower</button>
            <h2>Score: {counter}</h2>
        </div>
    );
}

export default HP;