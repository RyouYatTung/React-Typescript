import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "./actions";
import { StoreState } from "./reducers";
import React, { useState, useEffect } from "react";

interface AppProps {
  todos: Todo[];
  fetchTodos(): void;
  deleteTodo(): void;
  fetching: boolean;
}

const App: React.FC<AppProps> = ({ todos, fetchTodos }) => {
  const [fetching, setFetching] = useState(false);

  const onButtonClick = (): void => {
    fetchTodos();
    setFetching(true);
  };

  useEffect(() => {
    if (todos.length > 0 && fetching) {
      setFetching(false);
    }
  }, [todos, fetching]);

  return (
    <div>
      <button onClick={onButtonClick}>Fetch Todos</button>
      {fetching ? "LOADING" : null}
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(App);
