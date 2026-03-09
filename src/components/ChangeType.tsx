import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>("short_answer_question");
    function flipQuestionType(): void {
        setQuestionType((questionType) =>
            questionType === "short_answer_question" ? "multiple_choice_question" : "short_answer_question"
        );
    }
    return <div>
        <Button onClick={flipQuestionType}>Change Type</Button>
        {questionType === "short_answer_question" ? <p>Short Answer</p> : <p>Multiple Choice</p>}
    </div>;
}
