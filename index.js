//Index.

//Import a library to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import ExcerptList from './src/components/ExcerptList';
//Create a Component
const App = () => (
  <View>
    <Header headerText={'Ghost Writer'} />
    <ExcerptList / >
  </View>
  );


//Render it to the device
AppRegistry.registerComponent('albums', () => App);
