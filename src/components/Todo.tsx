import * as React from "react";

interface TodoProps {
    text: string;
    completed: boolean;
    onClick?(): void;
}

export default class Todo extends React.Component<TodoProps, any> {
    public render() {
        return (
            <li className="list-group-item" onClick={this.props.onClick}
                style={{
                    textDecoration: this.props.completed ? "line-through" : "none",
                }}>
                {this.props.text}
            </li>
        );
    }
}