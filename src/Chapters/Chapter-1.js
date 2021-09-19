import { useState } from 'react';

export function Clicker() {
    const [clicks, setClicks] = useState(0);
    //////////////////////////////////
    // const state = useState(0);/////
    // const clicks = state[0];///////
    // const setClicks = state[1];////
    //////////////////////////////////
    const [showClicks, setShowClicks] = useState(false);
    const onClick = () => {
        setTimeout(() => {
            setClicks((prevValue) => prevValue + 1);
        }, 2000);
    };
    const switchMe = () => {
        setShowClicks((prev) => !prev);
    };

    const clicksText = showClicks ? clicks : 'XX';
    return (
        <div>
            <button onClick={switchMe}>Switch Me! {showClicks}</button>
            <button onClick={onClick}>Click me! ({clicksText})</button>
        </div>
    );
}
