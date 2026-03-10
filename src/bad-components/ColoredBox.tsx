import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface ChangeColorProps {
    color: number;
    colorSetter: (newColor: number) => void;
}

function ChangeColor({color, colorSetter} : ChangeColorProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                colorSetter((1 + color) % COLORS.length);
            }}
        >
            Next Color
        </Button>
    );
}

function ColorPreview({color} : {color : number}): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[color],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor color={colorIndex} colorSetter={setColorIndex}></ChangeColor>
                <ColorPreview color={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
