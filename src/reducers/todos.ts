import {
  Todo,
  FetchPostsAction,
  DeleteTodoAction,
  ActionTypes,
} from "../actions";

export const todosReducer = (
  state: Todo[] = [],
  actions: FetchPostsAction | DeleteTodoAction
) => {
  switch (actions.type) {
    case ActionTypes.fetchTodos:
      return actions.payload;

    default:
      return state;
  }
};
