import * as React from "react";
import { TodoItem } from "../model";
import Todo from "./Todo";

export interface TodoListProps {
    todos: TodoItem[];
    onTodoClick?(index: number): void;
}

export default class TodoList extends React.Component<TodoListProps, any> {
    public render() {
        return (
            <ul className="list-group">
                {this.props.todos.map((todo) => (<Todo key={todo.index} {...todo} onClick={() => this.props.onTodoClick(todo.index)} />))}
            </ul>
        );
    }
}