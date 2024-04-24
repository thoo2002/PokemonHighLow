import React, { useState, useEffect } from 'react';


function HP() {
    var token = ZLfYaxdGF3Y3W5VX5pKfwSgC8gyoFexpROaxdAbaAqzPT8wlT3d9GRD2WYx9kS9K
    const [data, setData] = useState(null);
    const [name, setName] = useState(null);
    const [img, setImg] = useState(null);
    const [pkm1, setPkm1] = useState(null);
    const [pkm2, setPkm2] = useState(null);
    const [counter, setCounter] = useState(0);

    const generateRandomNumber = () => {
        const min = 1;
        const max = 1025;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const [rand, setRand] = useState(generateRandomNumber());
    getPkmnStat(() => {
        fetch('http://api.pkmnapi.com/v1/pokemon/stats/'+ rand,{ headers:{'Authorization': 'Bearer ' + token}})
            .then((response) => response.json())
            .then((json) => setData(json.data[].attributes.base_hp))
            .catch(error => console.log(error));
    }, []);

    getPkmnImg(() => {
        fetch('http://api.pkmnapi.com/v1/pokemon/pics'+ rand,{ headers:{'Authorization': 'Bearer ' + token}})
            .then((response) => response.json())
            .then((json) => setImg(json.data[].attributes.front))
            .catch(error => console.log(error));
    }, []);

    getPkmnName(() => {
        fetch('http://api.pkmnapi.com/v1/pokemon/names/'+ rand,{ headers:{'Authorization': 'Bearer ' + token}})
            .then((response) => response.json())
            .then((json) => setName(json.data[].attributes.name))
            .catch(error => console.log(error));
    },[]);

    ComparisonHigher(() => {
        if (pkm1 >= pkm2){
            setCounter(counter + 1);
            setPkm1(pkm2);
        }
        else{
            setCounter(0);
            print ("You lose");
        }
    },[])

    ComparisonLower(() =>{
        if (pkm1 <= pkm2){
            setCounter(counter + 1);
            setPkm1(pkm2);
        }
        else{
            setCounter(0);
            print ("You lose");
        }
    },[])
    return (
        <div>
            <button onClick={() => ComparisonHigher()}>Higher</button>
            <button onClick={() => ComparisonLower()}>Lower</button>
        </div>
    );
}

export default HP;