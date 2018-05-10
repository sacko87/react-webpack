import { actionCreatorFactory } from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export enum VisibilityFilter {
    SHOW_ALL = "SHOW_ALL",
    SHOW_COMPLETED = "SHOW_COMPLETED",
    SHOW_ACTIVE = "SHOW_ACTIVE",
}

// basically
// export const addTodo = (text) => { type: ADD_TODO, text }
export const addTodo = actionCreator<string>("ADD_TODO");
export const toggleTodo = actionCreator<number>("TOGGLE_TODO");
export const setVisibilityFilter = actionCreator<{ visibilityFilter: VisibilityFilter }>("SET_VISIBILITY_FILTER");