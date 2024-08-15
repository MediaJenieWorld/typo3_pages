import React, { useEffect, useState } from 'react';

const Counter = ({ targetNumber, gap = 5 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount < targetNumber) {
                    return prevCount + gap;
                } else {
                    clearInterval(interval);
                    return prevCount;
                }
            });
        }, 50);

        return () => clearInterval(interval);
    }, [targetNumber]);

    return (
        <>{count}</>
    );
};

export default Counter;
