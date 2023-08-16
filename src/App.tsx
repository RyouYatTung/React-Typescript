import { connect } from "react-redux";
import { Todo, fetchTodos } from "./actions";
import { StoreState } from "./reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos(): void;
}

const App: React.FC<AppProps> = ({ todos, fetchTodos }) => {
  return (
    <div>
      <button onClick={fetchTodos}>Fetch Todos</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

export default connect(mapStateToProps, { fetchTodos })(App);
