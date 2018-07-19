import * as React from 'react';

export interface IStateProps {
  value1: number;
  value2: number;
  answer: number;
}

export interface IRouterProps {
  ownProps: any;
}

export interface IDispatchProps {
  onChangeValue1(value: any): void;
  onChangeValue2(value: any): void;
  onGetAnswer(value: any): void;
}

type TProps = IStateProps & IDispatchProps;

export class Calculate extends React.Component<TProps> {
  public onHandleChangeValue1 = (event: any) => {
    return this.props.onChangeValue1(Number(event.target.value));
  }
  public onHandleChangeValue2 = (event: any) => {
    return this.props.onChangeValue2(Number(event.target.value));
  }
  public onHandleClickAnswer = () => {
    return this.props.onGetAnswer(this.props.value1 + this.props.value2);
  }
  public render() {
    return (
      <div>
        <input type='text' onChange={this.onHandleChangeValue1} /><br/>
        <input type='text' onChange={this.onHandleChangeValue2} /><br/>
        <input type='submit' onClick={this.onHandleClickAnswer} /><br/>
        {this.props.answer }
      </div>
    );
  }
}
