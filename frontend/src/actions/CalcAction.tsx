import { ICalcAction } from '../constans/CalcConstans';

interface IActionReturnState {
  type: typeof ICalcAction.CHANGE_VALUE_1 | ICalcAction.CHANGE_VALUE_2 | ICalcAction.GET_ANSWER;
  payload: number;
}

export const onChangeValue1 = (value: number): IActionReturnState => ({
  type: ICalcAction.CHANGE_VALUE_1,
  payload: value,
});

export const onChangeValue2 = (value: number): IActionReturnState => ({
  type: ICalcAction.CHANGE_VALUE_2,
  payload: value,
});

export const onGetAnswer = (value: number): IActionReturnState => ({
  type: ICalcAction.GET_ANSWER,
  payload: value,
});
