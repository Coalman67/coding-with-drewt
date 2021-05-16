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

export const TodoItem: FunctionComponent<Props> = ({ title, severity: inputSeverity, onConfirm, onCancel }) => {
    const severity = inputSeverity ?? Severity.Low

    return (
        <div className="todo">
            <Circle color={severity} />
            <h3 title={title}>Task: {title}</h3>

            <div className="buttons">
                <button onClick={onConfirm}>✅</button>
                <button onClick={onCancel}>❌</button>
            </div>
        </div>
    )
}