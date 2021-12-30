import { SETUSER } from '../types';

const initialState = {
  user: null,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SETUSER: {
      return {
        ...state,
        user: payload,
      };
    }

    default: {
      return state;
    }
  }
}
