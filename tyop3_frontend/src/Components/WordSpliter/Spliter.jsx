import React, { Fragment } from 'react';

const WordSplitter = ({ word, delay }) => {
    return (
        <div style={{ animationDelay: `calc(${delay * .5}s)` }} className="word-wrapper">
            {word.split('').map((char, index) => (
                <div className='char-wrapper' style={{ animationDelay: `calc(${index * .14}s)` }} key={index}>{char}</div>
            ))}
        </div>
    );
};


const LineSplitter = ({ line }) => {
    return (
        <div className="line-wrapper">
            {line.split(' ').map((word, index) => (
                <Fragment key={index}>
                    <WordSplitter word={word} delay={index} />
                </Fragment>
            ))}
        </div>
    );
};



export default LineSplitter;
