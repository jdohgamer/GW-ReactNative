import React, { Component } from 'react';
import { } from 'react-native';
import { connect } from 'react-redux';
import { excerptUpdate, excerptCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import ExcerptForm from './ExcerptForm';


class ExcerptCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.excerptCreate({ name, phone, shift });
  }
  render() {
    return (
      <Card>
        <ExcerptForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
          Save
          </Button>
        </CardSection>

      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.excerptForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { excerptUpdate, excerptCreate })(ExcerptCreate);
