import React from "react";
import classnames from "classnames";
import Button from "./components/Button";
import {Link} from "react-router-dom";
const  styles = require("./Todo.module.css");

function Todo({id, title, content, done, dueTime, toggleDoneState}) {
    return (
        <div className={classnames(styles.todo, {[styles.done]: done})}>
            <Link to={`todos/${id}`}>
            <div className={styles.todoTile}>{title}</div>
            </Link>
            <p className={styles.todoContent}>{content}</p>
            <Button onClick={toggleDoneState}>{
                done? 'Mark undone': 'Mark done'
            }</Button>

        </div>
    );
}

export default Todo;