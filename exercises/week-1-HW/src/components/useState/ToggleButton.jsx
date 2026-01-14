import { useState } from 'react';

export const ToggleButton = () => {
    const [isOn, setisOn] = useState(false);

    const toggle = () => {
        setisOn(!isOn);
    }

    return (
        <button onClick={toggle}>
            {isOn ? 'ON' : 'OFF'}
        </button>
    )
}