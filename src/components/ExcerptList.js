import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, View, ImageBackground, YellowBox } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { FloatingAction } from 'react-native-floating-action';
import { excerptsFetch, excerptCreate } from '../actions';
import ListItem from './ListItem';

const elbg = require('../assets/ExcerptListBG.jpg');

YellowBox.ignoreWarnings(['Setting a timer']);
const mConsole = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    mConsole.warn(message);
  }
};

class ExcerptList extends Component {

  //we will now attempt to fetch the list of employyes from the database
  componentWillMount() {
    this.props.excerptsFetch();

    //writing the boilerplate to fetch our data from the source
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    //nextProps are the next set of Props that this component
    //will be rendered with
    //this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  onButtonPress() {
    this.props.excerptCreate();
  }

  createDataSource({ excerpts }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(excerpts);
    const ret = Object.keys(excerpts).map((a, i) => [i, excerpts[a].name, excerpts[a].password]);
    console.log(`Produced Array: ${ret}`);
  }

  renderRow(excerpt) {
    return <ListItem excerpt={excerpt} />;
  }


  render() {
    console.log(this.props);
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          resizeMode={'stretch'}
          style={{ flex: 1 }}
          source={elbg}
        >
          <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={(this.renderRow)

            }
          />
          <FloatingAction
            onPressItem={this.onButtonPress().bind(this)}
          />
        </ImageBackground>

      </View>


    );
  }
}


const mapStateToProps = state => {
  const excerpts = _.map(state.excerpts, (val, uid) => {
    return { ...val, uid }; // { shift: 'Monday', name: 'S', Phone: '9387367'
  });

  return { excerpts };
};


export default connect(mapStateToProps, { excerptsFetch })(ExcerptList);
