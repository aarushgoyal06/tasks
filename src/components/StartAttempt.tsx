import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attemptStarted, setAttemptStarted] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);
    function addAttempt(): void {
        setAttempts((attemps) => attemps + 1);
    }
    function flipAttemptStarted(): void {
        setAttemptStarted(!attemptStarted);
    }
    function reduceAttempt(): void {
        setAttempts((attemps) => attemps - 1);
        flipAttemptStarted();
    }
    return <div>
        <Button onClick={reduceAttempt} disabled={attemptStarted || attempts === 0}>Start Quiz</Button>
        <Button onClick={flipAttemptStarted} disabled={!attemptStarted}>Stop Quiz</Button>
        <Button onClick={addAttempt} disabled={attemptStarted}>Mulligan</Button>
        {attempts}
    </div>;
}
