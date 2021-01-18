import React from "react";
import TodoItem from "./TodoItem";

const styles = {
  ul: {
    listStyle: "none",
    marginTop: "0",
    padding: "0",
  },
};

export default function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, index) => {
        return <TodoItem todo={todo} key={todo.id} index={index} />;
      })}
    </ul>
  );
}
