import React, { Component } from 'react';
import { } from 'react-native';
import { connect } from 'react-redux';
import { excerptUpdate, excerptCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import ExcerptForm from './ExcerptForm';


class ExcerptCreate extends Component {
  onButtonPress() {
    const { name, excerpt, genre } = this.props;

    this.props.excerptCreate({ name, excerpt, genre });
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
  const { name, excerpt, genre } = state.excerptForm;

  return { name, excerpt, genre };
};

export default connect(mapStateToProps, { excerptUpdate, excerptCreate })(ExcerptCreate);
