import { connect } from "react-redux";
import { Dispatch } from "redux";
import { toggleTodo, VisibilityFilter } from "../actions";
import TodoList, { TodoListProps } from "../components/TodoList";
import { ApplicationState } from "../reducers";

import { TodoItem } from "../model";

function getVisibleTodos(todos: TodoItem[], filter: VisibilityFilter) {
    switch (filter) {
        case VisibilityFilter.SHOW_ALL:
            return todos;
        case VisibilityFilter.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        case VisibilityFilter.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
    }
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter),
    };
};

const mapDispatchToProps = (dispatch: Dispatch) : Partial<TodoListProps> => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id));
        },
    };
};

const VisibileTodoList = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList);

export default VisibileTodoList;