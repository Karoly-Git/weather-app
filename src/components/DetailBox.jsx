// src/components/DetailBox.js

import React from "react";

const DetailBox = ({ iconSrc, label, value }) => {
    return (
        <div className="detail-box">
            <div>
                <img src={iconSrc} alt={`${label} icon`} />
                <span>{label}</span>
            </div>
            <h2>{value}</h2>
        </div>
    );
};

export default DetailBox;
