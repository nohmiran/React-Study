import React, {useState} from 'react';
import "./App2.css"
import Bottom from "./components/Bottom";
import Top from "./components/Top";

// 글 쓰기, 글 삭제, 글 목록보기
const App2 = () => {

    return (
        <div className='container'>
            <h1>최상단화면</h1>
            <Top/>
            <Bottom/>
        </div>
    );
};

export default App2;