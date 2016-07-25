import React, { Component } from 'react';
import Radium from 'radium';

require('normalize-css');
require('./ExtraStyle.css');
require('./Rhythm.css');

import Markup from './Markup';

const styles = {
  container: {
  }
};

class MyComponent extends Component {

  render() {
    return(
      <div style={styles.container}>
        <Markup />
      </div>
    );
  }

}

export default Radium(MyComponent);
