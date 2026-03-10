import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DoubleHalfProps {
    initialValue: number;
    setter: (newValue: number) => void;
}

function Doubler({initialValue, setter} : DoubleHalfProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setter(2 * initialValue);
            }}
        >
            Double
        </Button>
    );
}

function Halver({initialValue, setter} : DoubleHalfProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setter(initialValue / 2);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler initialValue={dhValue} setter={setDhValue}></Doubler>
            <Halver initialValue={dhValue} setter={setDhValue}></Halver>
        </div>
    );
}
