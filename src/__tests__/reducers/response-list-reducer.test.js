import responseListReducer from "../../reducers/response-list-reducer";
import * as c from "../../actions/ActionTypes";

describe("responseListReducer", () => {

  let action;

  const promptData = {
    body: "this is the prompt",
    id: 1
  };

  const responseData = {
    prompt: promptData,
    body: "this is the response",
    upvoteCount: 0,
    downvoteCount: 0,
    date: "04/27/2023, 12:25 PM",
    id: 1
  };

  const currentState = {
    1: {
      prompt: promptData,
      body: "first response",
      upvoteCount: 0,
      downvoteCount: 0,
      date: "04/27/2023, 12:25 PM",
      id: 1
    },
    2: {
      prompt: promptData,
      body: "second response",
      upvoteCount: 0,
      downvoteCount: 0,
      date: "08/27/2023, 02:10 PM",
      id: 2
    }
  }

  test("returns default state if there is no action type passed into the reducer", () => {
    expect(responseListReducer({}, { type: null })).toEqual({});
  });

  test("successfully adds new response data to responseList", () => {
    const { prompt, body, upvoteCount, downvoteCount, date, id } = responseData;
    action = {
      type: c.ADD_RESPONSE,
      prompt: prompt,
      body: body,
      upvoteCount: upvoteCount,
      downvoteCount: downvoteCount,
      date: date,
      id: id
    };
    expect(responseListReducer({}, action)).toEqual({
      [id]: {
        prompt: prompt,
        body: body,
        upvoteCount: upvoteCount,
        downvoteCount: downvoteCount,
        date: date,
        id: id
      }
    });
  });

  test("successfully deletes a response", () => {
    action = {
      type: c.DELETE_RESPONSE,
      id: 1
    };
    expect(responseListReducer(currentState, action)).toEqual({
      2: {
        prompt: promptData,
        body: "second response",
        upvoteCount: 0,
        downvoteCount: 0,
        date: "08/27/2023, 02:10 PM",
        id: 2
      }
    });
  });
  
});