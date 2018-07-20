import {onChangeValue1} from '../../../frontend/src/actions';
import {ICalcAction} from '../../../frontend/src/constans/CalcConstans';
import calcilateReducer, { initialState } from '../../../frontend/src/reducers/calcilateReducer';
// import renderer from 'react-test-renderer';
// import {Link} from 'react-router-dom';
// import {CalculateConnect} from '../../../frontend/src/containers/calcCont';

describe('[Actions] todoList test', () => {

  it('reducer1', () => {
    const state = {
      ...initialState.state,
      value1: 0,
      value2: 0,
      answer: 0,
    };
    const action = {
      type: ICalcAction.CHANGE_VALUE_1,
      payload: 1,
    };
    expect(calcilateReducer(state, action)).toEqual({
      ...state,
      value1: 1,
    });
  });

  it('action1', () => {
    expect(onChangeValue1(1)).toEqual({
      type: ICalcAction.CHANGE_VALUE_1,
      payload: 1,
    });
  });

  // it('snapshot1', ( )=> {
  //   const tree = renderer.create( <CalculateConnect />)
  // });

});
