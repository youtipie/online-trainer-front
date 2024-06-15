import React from 'react';
import "./Progress.module.css";

const Progress = ({max, value, className}) => {
    return (
        <progress className={className} max={max} value={value}/>
    );
};

export default Progress;