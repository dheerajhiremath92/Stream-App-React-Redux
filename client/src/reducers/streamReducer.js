import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/types";
import actions from "redux-form/lib/actions";

import _ from "lodash";
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload }; //--> object based adding of key value pair
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload); //--> to remove property from object use _.omit from lodash library
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") }; //--> mapKeys(lodash) --> takes an array and returns an object

    default:
      return state;
  }
};
