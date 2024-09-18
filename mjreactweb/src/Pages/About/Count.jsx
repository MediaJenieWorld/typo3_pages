import React, { useEffect, useState, useRef, Fragment } from 'react';

const Counter = ({ targetNumber, gap = 5 }) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);
    const [isInView, setIsInView] = useState(false);
    const step = Math.round(targetNumber / 10)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {
                    setIsInView(true);
                } else {
                    setIsInView(false);
                }
            },
            { threshold: 1 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    useEffect(() => {
        let interval;
        if (isInView && count < targetNumber) {
            interval = setInterval(() => {
                setCount((prevCount) => {
                    if (prevCount < targetNumber) {
                        if (prevCount + step > targetNumber) {
                            return targetNumber
                        }
                        else {
                            return prevCount + step;
                        }
                    } else {
                        clearInterval(interval);
                        return prevCount;
                    }
                });
            }, 50);
        }

        return () => clearInterval(interval);
    }, [isInView, count, targetNumber]);

    return (
        <span ref={counterRef}>
            {count}
        </span>
    );
};

export default Counter;
