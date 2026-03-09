import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎃" | "🎄" | "🎆" | "💘" | "🦃";
const nextAlphabet: Record<Holiday, Holiday> = {
    "🎄": "🎃",
    "🎃": "🎆",
    "🎆": "🦃",
    "🦃": "💘",
    "💘": "🎄",
};
const nextYear: Record<Holiday, Holiday> = {
    "🎆": "💘",
    "💘": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "🎆",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎆");

    function advanceAlphabet(): void {
        setHoliday(nextAlphabet[holiday]);
    }

    function advanceYear(): void {
        setHoliday(nextYear[holiday]);
    }

    return (
        <div>
            <div>Holiday: {holiday}</div>

            <Button onClick={advanceAlphabet}>Advance by Alphabet</Button>

            <Button onClick={advanceYear}>Advance by Year</Button>
        </div>
    );
}
