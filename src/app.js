import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCZVjEvYnTgM2G-OKinbb9C4YyId_WZ68E',
      authDomain: 'auth-b95d1.firebaseapp.com',
      databaseURL: 'https://auth-b95d1.firebaseio.com',
      projectId: 'auth-b95d1',
      storageBucket: 'auth-b95d1.appspot.com',
      messagingSenderId: '403811536077'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        </CardSection>
      );
      case false:
        return <LoginForm />;
      default:
        return <CardSection><Spinner size="large" /></CardSection>;
      }
    }

  render() {
    return (
      <View>
        <Header headerText="Ghost Writer" />
          {this.renderContent()}
      </View>
    );
  }
}

export default App;
