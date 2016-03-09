import React, { Component } from 'react';

import SimpleSettings from './SimpleSettings';
import { bindStateForComponent } from '../../utils/parameters';

class FlightMode extends Component {
  static propTypes = {
    ...SimpleSettings.propTypes
  }

  render() {
    return (
      <SimpleSettings name="flight mode" {...this.props}/>
    );
  }
}

export default bindStateForComponent('flightMode', FlightMode);
