import * as React from 'react';
import { CalculateConnect } from '../containers/calcCont';

export class HomePage extends React.Component {

  public componentDidCatch(error: any) {
    console.log(error);
  }
  public  componentWillMount() {
    console.log(this.props);
  }
  public render() {
    return (
      <div>
        <h1>Home</h1>
        <CalculateConnect {...this.props} />
      </div>
    );
  }
}
