import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {
    const[data,setData] = useState(0);


    // 실행시점 : (1) App()함수가 최초 실행될 때 (= 마운트될 때)
    useEffect(() => {
        console.log('useEffect 실행됨')
    });


    return (
        <div>
            <h1>데이터 : {data}</h1>
        </div>
    );
};

export default App;