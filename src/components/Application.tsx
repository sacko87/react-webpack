import * as React from "react";
import AddTodo from "../containers/AddTodo";
import VisibileTodoList from "../containers/VisibleTodoList";
import Footer from "./Footer";

export default
class Application extends React.Component {
    public render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Todo List</h1>
                        <AddTodo />
                        <VisibileTodoList />
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}