import React from "react";
import classnames from "classnames";
import Button from "./components/Button";
const  styles = require("./Todo.module.css");

function Todo({title, content, done, dueTime, toggleDoneState}) {
    return (
        <div className={classnames(styles.todo)}>
            <div className={styles.todoTile}>{title}</div>
            <p className={styles.todoContent}>{content}</p>
            <Button>Mark done</Button>
        </div>
    );
}

export default Todo;