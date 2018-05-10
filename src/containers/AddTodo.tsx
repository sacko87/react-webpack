import * as React from "react";

import { connect, Dispatch } from "react-redux";
import { addTodo } from "../actions";

const AddTodoContainer = (argument: {dispatch: Dispatch}) => {
    let input: HTMLInputElement;

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                argument.dispatch(addTodo(input.value));
                input.value = "";
            }}>
            <div className="input-group">
                <input type="text" className="form-control" placeholder="What next?" ref={self => { input = self; }} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="submit">Add Todo</button>
                </div>
            </div>
        </form>
    );
};

const AddTodo = connect()(AddTodoContainer);
export default AddTodo;