import {ICalcAction} from '../../../frontend/src/constans/CalcConstans';
import calcilateReducer, { initialState } from '../../../frontend/src/reducers/calcilateReducer';

describe('[Actions] todoList test', () => {

  it('1', () => {
    const action = {
      type: ICalcAction.CHANGE_VALUE_1,
      payload: 1,
    };
    expect(calcilateReducer(initialState.state, action)).toEqual({
      ...initialState.state,
      inputValue1: false,
    });
  });

});
