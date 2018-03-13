import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class ExcerptList extends Component {
  //this will render an empty state with an empty array called albums
  //'albums' is from the HTTP link
  //this is for initializing the empty array
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
       <Text key={album.title}>{album.title}</Text>);
  }

  render() {
    console.log(this.state);

    return (
      <View>
      {this.renderAlbums()}
      </View>
    );
  }
}

export default ExcerptList;
