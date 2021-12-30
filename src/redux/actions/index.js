import { SETUSER } from '../types';

export function setUserRedux(user) {
  return {
    type: SETUSER,
    payload: user,
  };
}

export function clearUserRedux() {
  return {
    type: SETUSER,
    payload: null,
  };
}
