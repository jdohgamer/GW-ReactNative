import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { } from './components/common';
import Router from './Router';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyDaQLu7h783dLay5p3ojcfhgqPno__G28c',
    authDomain: 'ghostwriter-627a3.firebaseapp.com',
    databaseURL: 'https://ghostwriter-627a3.firebaseio.com',
    projectId: 'ghostwriter-627a3',
    storageBucket: 'ghostwriter-627a3.appspot.com',
    messagingSenderId: '732681603931'
  };
  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
}
}


export default App;
