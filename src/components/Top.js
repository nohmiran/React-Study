import React from 'react';
import "../App2.css"

const Top = (props) => {

    const {number} = props;

    return (
        <div className="sub_container">
            <h1>Top</h1>
            번호 : {number}
        </div>
    );
};

export default Top;