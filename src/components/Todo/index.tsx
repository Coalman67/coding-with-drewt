import React, { FunctionComponent } from 'react'
import './Todo.css'
import { Severity, Todo } from '../../types'

interface CircleProps {
    color: string
}

const Circle: FunctionComponent<CircleProps> = ({ color }) => <div className="circle" style={{ backgroundColor: color }} />

interface Props extends Todo {
    onConfirm?: () => void
    onCancel?: () => void
}

export const TodoItem: FunctionComponent<Props> = ({ title, description, severity: inputSeverity, isCompleted, onConfirm, onCancel }) => {
    const severity = inputSeverity ?? Severity.Low

    return (
        <div className={`todo ${isCompleted && 'completed'}`}>
            <Circle color={severity} />

            <div className="text">
                <h3>{title}</h3>
                {description && <h4>{description}</h4>}
            </div>


            <div className="buttons">
                <button onClick={onConfirm}>✅</button>
                <button onClick={onCancel}>❌</button>
            </div>
        </div>
    )
}