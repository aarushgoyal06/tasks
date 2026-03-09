import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    function flipVisible(): void {
        setVisible(!visible);
    }
    return <div>
        <Button onClick={flipVisible}>{visible ? "Hide Answer" : "Reveal Answer"}</Button>
        {visible && <p>42</p>}
    </div>;
}
