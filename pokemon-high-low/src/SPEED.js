import React, { useState } from 'react';
function SPEED() {
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
    const [lose, setLose] = useState(false);
    const generateRandomNumber = () => {
        const min = 1;
        const max = 1025;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const generateRandomNumber2 = () => {
        const min = 1;
        const max = 151;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };


    const [rand, setRand] = useState(generateRandomNumber());
    
    function getPkmnStat(){
        fetch('https://pokeapi.co/api/v2/pokemon/'+rand)
            .then((response) => response.json()) 
            .then((json) => {
                setData(json.stats[5].base_stat);
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
            setLose(true);
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
            setLose(true);
        }
    }
    function TryAgain(){
        setLose(false);
        setCounter(0);
        setPkm2({
            name: name,
            stat: data,
            img: img,
        });
        setRand(generateRandomNumber2());
        setData(getPkmnStat());
        setName(getPkmnName());
        setImg(getPkmnImg());
        setPkm1(pkm2);
        console.log(pkm1);
    }
    return (
        <div>
            <h1 class="para">High Low Speed</h1>
            <div class = 'container'>
                <div class = 'col'>
                    <h2 class="para">{pkm1.name}</h2>
                    <img src={pkm1.img} alt="Pokemon" />
                    <h2 class="para">Speed: {pkm1.stat}</h2>
                </div>
                <div class = 'col col_adjustment'>
                    <div class>
                    {lose && <div><div class ='lose'>You lose!</div>
                        <button class = 'tryAgain'onClick={()=> TryAgain()}>Try Again</button>
                        </div>}
                    </div>
                    {!lose && <div>
                        <button class = 'greenButton' onClick={() => ComparisonHigher()}>Higher</button>
                        <button class = 'redButton' onClick={() => ComparisonLower()}>Lower</button>
                        </div>} 
                </div>
                <div class = 'col'>
                    <h2 class="para">{pkm2.name}</h2>
                    <img src={pkm2.img} alt="Pokemon" />
                </div>
            </div>
            <h2 class="para">Score: {counter}</h2>
            <h2 class="para">High Score: {HighScore}</h2>
        </div>
    );
}

export default SPEED;