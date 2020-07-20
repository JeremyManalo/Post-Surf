import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';

const initialState = {
  content: {},
  status: null,
  id: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        content: action.payload.message,
        status: action.payload.status,
        id: action.payload.id,
      };
    case CLEAR_ERRORS:
      return { content: {}, status: null, id: null };
    default:
      return state;
  }
}
