import React, { Fragment } from 'react';

const WordSplitter = ({ word, delay }) => {
    return (
        <div style={{
            display: "inline-block",
            transform: "translateY(100%)",
            animation: "reveals 3s 1 forwards",
            overflow: "hidden"
        }} className="word-wrapper">
            {word.split('').map((char, index) => (
                <div className='char-wrapper' style={{
                    display: "inline-block",
                    transform: "translateY(100%)"
                }} key={index}>{char}</div>
            ))}
        </div>
    );
};


const LineSplitter = ({ line }) => {
    return (
        <div style={{
            overflow: "hidden",
            display: "flex",
            flexWrap: "wrap",
            gap: "5px",
            fontSize: "2rem",
        }} className="line-wrapper">
            {line.split(' ').map((word, index) => (
                <Fragment key={index}>
                    <WordSplitter word={word} delay={index} />
                </Fragment>
            ))}
        </div>
    );
};



export default LineSplitter;
