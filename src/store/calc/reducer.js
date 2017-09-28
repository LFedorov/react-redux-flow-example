// @flow

import type { Action } from "./actions";
import type { CalcState } from "./state";

import * as types from "./types";

const State: CalcState = {
  amount: 0
};

export function CalcReducer(
  state: CalcState = State,
  action: Action
): CalcState {
  switch (action.type) {
    case types.INCREMENT:
      return { ...state, amount: state.amount + action.payload.amount };

    case types.DECREMENT:
      return { ...state, amount: state.amount - action.payload.amount };

    default:
      return state;
  }
}
