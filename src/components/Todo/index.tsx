import React, { FunctionComponent } from 'react'
import './Todo.css'
import { Severity, Todo } from '../../types'

interface CircleProps {
    color: string
}

const Circle: FunctionComponent<CircleProps> = ({ color }) => <div className="circle" style={{ backgroundColor: color }} />

export const TodoItem: FunctionComponent<Todo> = (props) => {
    const severity = props.severity ?? Severity.Low

    return (
        <div className="todo">
            <Circle color={severity} />
            Task: {props.title}
        </div>
    )
}