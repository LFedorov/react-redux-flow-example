// @flow

import type { Action } from './actions';
import type { CalcState } from './state';

const STATE: CalcState = {
  message: '',
  amount: 0,
};

export function CalcReducer(
  state: CalcState = STATE,
  action: Action,
): CalcState {
  switch (action.type) {
    case '@@calc/INCREMENT': {
      const { message, amount } = action.payload;

      return { ...state, message: message, amount: state.amount + amount };
    }

    case '@@calc/DECREMENT': {
      const { amount } = action.payload;

      return { ...state, amount: state.amount - amount };
    }

    default:
      return state;
  }
}
