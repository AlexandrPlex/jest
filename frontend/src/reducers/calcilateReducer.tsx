import {Action} from 'redux';
import {ICalcAction} from '../constans/CalcConstans';

export interface IActionType extends Action {
  type: string;
  payload: any;
}

export interface ICalcState {
  value1: number;
  value2: number;
  answer: number;
}

export const initialState = {
  get state(): ICalcState {
    return {
      value1: 0,
      value2: 0,
      answer: 0,
    };
  },
};

export default function calcilateReducer(state: ICalcState = initialState.state, action: IActionType) {
  switch (action.type) {
    case `${ICalcAction.CHANGE_VALUE_1}`:
      return {
        ...state,
        value1: action.payload,
      };
    case `${ICalcAction.CHANGE_VALUE_2}`:
      return {
        ...state,
        value2: action.payload,
      };
    case `${ICalcAction.GET_ANSWER}`:
      return {
        ...state,
        answer: action.payload,
      };
  }
  return state;
}
