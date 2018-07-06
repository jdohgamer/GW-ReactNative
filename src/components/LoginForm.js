import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, createUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

const bg = require('../assets/bgWinstar.png');


class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  onCreateUserButtonPress() {
    createUser();
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
      Enter A World of Winning
      </Button>
    );
  }

  renderCreateButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
        Create Passport Account
        </Button>
    );
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
          {this.props.error}
          </Text>
        </View>
      );
    }
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          resizeMode={'stretch'}
          style={{ flex: 1 }}
          source={bg}
        >
         <Text style={styles.TextStyle} />
            <Card>
              <CardSection>
                <Input
                  label="Passport #"
                  placeholder="Y123456789"
                  onChangeText={this.onEmailChange.bind(this)}
                  value={this.props.email}
                />
              </CardSection>

              <CardSection>
              <Input
                secureTextEntry
                label="PIN #"
                placeholder="####"
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
              />
              </CardSection>
              {this.renderError()}
              <CardSection>
              {this.renderButton()}
              </CardSection>
              <CardSection>
              {this.renderCreateButton()}
              </CardSection>

            </Card>

          </ImageBackground>
        </View>

    );
  }
}


const styles = {
  errorTextStyle: {
    fontSize: 25,
    alignSelf: 'center',
    color: 'red'
  },
  TextStyle: {
    fontSize: 40,
    paddingTop: 100,
    alignSelf: 'center',
    color: 'white'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps,
  { emailChanged, passwordChanged, loginUser })(LoginForm);
