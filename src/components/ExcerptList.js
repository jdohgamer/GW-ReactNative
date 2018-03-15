import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import ExcerptDetail from './ExcerptDetail';

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
       <ExcerptDetail key={album.title} excerpt={album} />
     );
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
