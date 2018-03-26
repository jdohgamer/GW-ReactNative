import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { excerptUpdate } from '../actions';
import { CardSection, Input } from './common';


class ExcerptForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Title: "
            placeholder="How to murder him"
            value={this.props.name}
            onChangeText={value => this.props.excerptUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Excerpt: "
            placeholder=" Once upon a killing.."
            value={this.props.phone}
            onChangeText={value => this.props.excerptUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}> Genre </Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.excerptUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label="Fan Fiction" value="Monday" />
            <Picker.Item label="Non-Fiction" value="Tuesday" />
            <Picker.Item label="Prompt" value="Wednesday" />
            <Picker.Item label="Short Story" value="Thursday" />
            <Picker.Item label="Notes" value="Friday" />
            <Picker.Item label="Poem" value="Saturday" />
            <Picker.Item label="Thoughts" value="Sunday" />
          </Picker>
        </CardSection>
    </View>
  );
}
}

const styles = {
  pickerTextStyle: {
    fontSize: 20,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.excerptForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { excerptUpdate })(ExcerptForm);
