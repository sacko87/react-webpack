import { reducerWithInitialState } from "typescript-fsa-reducers";

import * as Actions from "./actions";

import { TodoItem } from "./model";

export interface ApplicationState {
    visibilityFilter: Actions.VisibilityFilter;
    todos: TodoItem[];
}

const INITIAL_STATE : ApplicationState = {
    visibilityFilter: Actions.VisibilityFilter.SHOW_ALL,
    todos: [],
};

let nextTodoId = 0;

export const reducer = reducerWithInitialState(INITIAL_STATE)
    .case(Actions.setVisibilityFilter,
        (state, payload) : ApplicationState => ({ ...state, visibilityFilter: payload.visibilityFilter }))
    .case(Actions.addTodo,
        (state, text) : ApplicationState => ({ ...state, todos: [ ...state.todos, { index: nextTodoId++, text, completed: false } ] }))
    .case(Actions.toggleTodo, (state, index) : ApplicationState => ({ ...state, todos: toggleTodo(state.todos, index) } ))
    .build();

function toggleTodo(todos: TodoItem[], index: number) {
    return todos.map(todo => {
        if (todo.index === index) {
            return { ...todo, completed: !todo.completed };
        }

        return todo;
    });
}