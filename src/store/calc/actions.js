// @flow

import * as types from './types';

type IncrementAction = {
  type: types.INCREMENT,
  payload: {
    amount: number,
    some?: string,
  },
};

type DecrementAction = {
  type: types.DECREMENT,
  payload: {
    amount: number,
  },
};

export type Action = IncrementAction | DecrementAction;

export function increment(amount: number): IncrementAction {
  return {
    type: types.INCREMENT,
    payload: {
      amount,
    },
  };
}

export function decrement(amount: number): DecrementAction {
  return {
    type: types.DECREMENT,
    payload: {
      amount,
    },
  };
}
