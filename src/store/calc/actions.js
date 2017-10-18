// @flow

type IncrementAction = {
  type: '@@calc/INCREMENT',
  payload: {
    amount: number,
    message: string,
  },
};

type DecrementAction = {
  type: '@@calc/DECREMENT',
  payload: {
    amount: number,
  },
};

export type Action = IncrementAction | DecrementAction;

export function increment(amount: number): IncrementAction {
  return {
    type: '@@calc/INCREMENT',
    payload: {
      message: 'INCREMENT Call',
      amount,
    },
  };
}

export function decrement(amount: number): DecrementAction {
  return {
    type: '@@calc/DECREMENT',
    payload: {
      amount,
    },
  };
}
