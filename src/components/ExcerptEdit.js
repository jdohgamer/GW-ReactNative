import _ from 'lodash';
import React, { Component } from 'react';
import { } from 'react-native';
import { connect } from 'react-redux';
//import Communications from 'react-native-communications';
import ExcerptForm from './ExcerptForm';
import { excerptUpdate, excerptSave, excerptDelete } from '../actions';
import { Card, Button, CardSection, Confirm } from './common';


class ExcerptEdit extends Component {
  state = { showModal: false };
  componentWillMount() {
    _.each(this.props.excerpt, (value, prop) => {
      this.props.excerptUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.excerptSave({ name, phone, shift, uid: this.props.excerpt.uid });
  }

  onTextPress() {
    //const { phone, shift } = this.props;
    //Communications.text(phone, `Your new prompt requires the ${shift} genre`);
  }

  onAccept() {
    const { uid } = this.props.excerpt;

    this.props.excerptDelete({ uid });
}

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <ExcerptForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
          Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button
          onPress={this.onTextPress.bind(this)}
          >
          Text Prompt
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Trash Excerpt
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Yeah, this was a garbage excerpt..
        </Confirm>
      </Card>

    );
  }
}

const mapStateToProps = (state) => {
  const { name, excerpt, genre } = state.excerptForm;

  return { name, excerpt, genre };
};

export default connect(mapStateToProps, { excerptUpdate, excerptSave, excerptDelete }
)(ExcerptEdit);
