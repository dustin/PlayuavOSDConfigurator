import React, { Component } from 'react';

import SimpleSettings from './SimpleSettings';
import { bindStateForComponent } from '../../utils/parameters';

class BatteryConsumed extends Component {
  static propTypes = {
    ...SimpleSettings.propTypes
  }

  render() {
    return (
      <SimpleSettings name="battery consumed" {...this.props}/>
    );
  }
}

export default bindStateForComponent('batteryConsumed', BatteryConsumed);
