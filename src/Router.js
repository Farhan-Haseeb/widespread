import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import GlobalScreen from './containers/Global';
// import MapScreen from './containers/Map';

export default class Navigation extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="global" component={GlobalScreen} title="World Wide" />
        </Stack>
      </Router>
    );
  }
}
