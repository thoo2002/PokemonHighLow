import React, { useState, useEffect } from 'react';


function HP() {
    const [data, setData] = useState(80);
    const [name, setName] = useState('venusaur');
    const [img, setImg] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png');
    const [pkm1, setPkm1] = useState({
        name: 'bulbasaur',
        stat: 45,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    });

    const [pkm2, setPkm2] = useState({
        name: 'ivysaur',
        stat: 60,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    });
    const [counter, setCounter] = useState(0);
    const [HighScore, setHighScore] = useState(0);

    const generateRandomNumber = () => {
        const min = 1;
        const max = 1025;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const [rand, setRand] = useState(generateRandomNumber());
    
    function getPkmnStat(){
        fetch('https://pokeapi.co/api/v2/pokemon/'+rand)
            .then((response) => response.json()) 
            .then((json) => {
                setData(json.stats[0].base_stat);
            })
            .catch(error => console.log(error));
    };

    function getPkmnImg() {
        fetch('https://pokeapi.co/api/v2/pokemon/'+rand)
            .then((response) => response.json())
            .then((json) => {
                setImg(json.sprites.front_default)
            })
            .catch(error => console.log(error));
    };

    function getPkmnName() {
        fetch('https://pokeapi.co/api/v2/pokemon/'+rand)
            .then((response) => response.json())
            .then((json) => {
                setName(json.name);
            })
            .catch(error => console.log(error));
    };

    function ComparisonHigher() {
        console.log(pkm2);
        if (pkm2.stat >= pkm1.stat){
            setCounter(counter + 1);
            setPkm1(pkm2);
            setRand(generateRandomNumber());
            setData(getPkmnStat());
            setName(getPkmnName());
            setImg(getPkmnImg());
            setPkm2({name: name
                , stat: data
                , img: img});
        }
        else{
            if (counter > HighScore){
                setHighScore(counter);
            }
            setCounter(0);
        }
    }

    function ComparisonLower(){
        if (pkm2.stat <= pkm1.stat){
            setCounter(counter + 1);
            setPkm1(pkm2);
            setRand(generateRandomNumber());
            setData(getPkmnStat());
            setName(getPkmnName());
            setImg(getPkmnImg());
            setPkm2({
                name: name,
                stat: data,
                img: img,
            });
        }
        else{
            if (counter > HighScore){
                setHighScore(counter);
            }
            setCounter(0);
        }
    }
    return (
        <div>
            <h1 class="para">High Low</h1>
            <h2 class="para">{pkm1.name}</h2>
            <img src={pkm1.img} alt="Pokemon" />
            <button onClick={() => ComparisonHigher()}>Higher</button>
            <button onClick={() => ComparisonLower()}>Lower</button>
            <h2 class="para">{pkm2.name}</h2>
            <img src={pkm2.img} alt="Pokemon" />
            <h2 class="para">Score: {counter}</h2>
            <h2 class="para">High Score: {HighScore}</h2>
        </div>
    );
}

export default HP;