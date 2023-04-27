import * as c from "../actions/ActionTypes";

const reducer = (state = {}, action) => {
  const { prompt, body, upvoteCount, downvoteCount, date, id } = action;
  switch (action.type) {
    case c.ADD_RESPONSE:
      return Object.assign({}, state, {
        [id]: {
          prompt: prompt,
          body: body,
          upvoteCount: upvoteCount,
          downvoteCount: downvoteCount,
          date: date,
          id: id
        }
      });
      case c.DELETE_RESPONSE:
        let newState = {...state};
        delete newState[id];
        return newState;
    default:
      return state;
  }
};

export default reducer;