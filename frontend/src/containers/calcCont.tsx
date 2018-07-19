import { connect, Dispatch } from 'react-redux';

import * as acion from 'actions';
import { Calculate, IDispatchProps, IStateProps } from 'components/Calculate';
import { IAppState } from '../types';

const mapStateToProps = (state: IAppState): IStateProps => ({
  value1: state.calcilateReducer.value1,
  value2: state.calcilateReducer.value2,
  answer: state.calcilateReducer.answer,
});

const mapDispatchToProps = (dispatch: Dispatch<IAppState>): IDispatchProps => ({
  onChangeValue1: (value: number) => {
    dispatch(acion.onChangeValue1(value));
  },
  onChangeValue2: (value: number) => {
    dispatch(acion.onChangeValue2(value));
  },
  onGetAnswer: (value: number) => {
    dispatch(acion.onGetAnswer(value));
  },
});

export const CalculateConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calculate);
