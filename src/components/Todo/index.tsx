import React, { FunctionComponent } from 'react'
import './Todo.css'

interface Props {
    /** The title of the TODO item. */
    title: string
}

const Circle: FunctionComponent = () => {
    return <div className="circle"></div>
}

export const Todo: FunctionComponent<Props> = ({ title }) => {
    return (
        <div className="todo">
            <Circle />
           Task: {title}
        </div>
    )
}