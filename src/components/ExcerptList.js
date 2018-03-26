import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { excerptsFetch } from '../actions';
import ListItem from './ListItem';


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

  createDataSource({ excerpts }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(excerpts);
  }

  renderRow(excerpt) {
    return <ListItem excerpt={excerpt} />;
  }

  render() {
    console.log(this.props);
    return (

      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />

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
