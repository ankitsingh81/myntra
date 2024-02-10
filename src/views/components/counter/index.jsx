import './style.css'
import React from 'react';


function Counter() {
    const [targetDate, setTargetDate] = React.useState(1707967299683);
    const [timeRemaining, setTimeRemaining] = React.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    const calculateTimeRemaining = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        return { days, hours, minutes, seconds };
    };
    return (
        <>

            <div className='d-flex px-5 py-3 justify-content-center timer container-fluid text-center align-items-center'>
                SALE ENDS IN
                <span className="counter"> {timeRemaining.days} </span>
                <span className='units'>Days :</span>
                <span className="counter">{timeRemaining.hours} </span>
                <span className='units'> H :</span>
                <span className="counter">{timeRemaining.minutes}</span>
                <span className='units'> M :</span>
                <span className="counter">{timeRemaining.seconds} </span>
                <span className='units'>S</span>
            </div>

        </>
    )
}
export default Counter;