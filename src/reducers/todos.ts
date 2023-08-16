import { Todo, FetchPostsAction } from "../actions";
import { ActionTypes } from "../actions/types";

export const todosReducer = (state: Todo[] = [], actions: FetchPostsAction) => {
  switch (actions.type) {
    case ActionTypes.fetchTodos:
      return actions.payload;

    default:
      return state;
  }
};
