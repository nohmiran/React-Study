import React, {useState} from 'react';
import "./App2.css"
import Bottom from "./components/Bottom";
import Top from "./components/Top";

// 글 쓰기, 글 삭제, 글 목록보기
const App2 = () => {

    const [number, setNumber] = useState(1);

    // Bottom에는 setNumber를 넘기면 안되고,
    // 나중에 어떤 주문이 추가될지 모르니까 주문이 들어간 함수를 넘겨야한다
    const addNumber = () => {
        setNumber(number + 1);
    };


    return (
        <div className='container'>
            <h1>최상단화면</h1>
            <Top number={number}/>
            <Bottom addNumber = {addNumber}/>
        </div>
    );
};

export default App2;