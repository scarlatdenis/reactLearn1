import React from "react";
import TodoList from "./Todo/TodoList";

function App() {
  const todos = [
    { id: 1, completed: false, title: "De cumparat paine" },
    { id: 2, completed: false, title: "De cumparat unt" },
    { id: 3, completed: false, title: "De cumparat lapte" },
  ];

  return (
    <div className="wrapper">
      <h1>React</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
