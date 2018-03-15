import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const ExcerptDetail = (props) => (
    <Card>
      <CardSection>
        <Text>{props.excerpt.title}</Text>
      </CardSection>
    </Card>
  );

export default ExcerptDetail;
