//Import libraries for making a Component
import React from 'react';
import { View, Text } from 'react-native';

//Make Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>;
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#00000',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative'
  },

  textStyle: {
    fontSize: 20
  }
};

//Make the component available to other parts of the app
export { Header };
