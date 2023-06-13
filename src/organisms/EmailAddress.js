import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  FirstNameLastNameContainer,
  SplitContainer,
  Label,
  TextInput_Styled,
  InputContainer,
  TextInputContainer,
} from '../styledComponents';

const EmailAddress = ({email, setEmail}) => {
  return (
    <InputContainer>
      <TextInputContainer>
        <Label>Email Address</Label>
        <TextInput_Styled onChangeText={value => setEmail(value)} />
      </TextInputContainer>
    </InputContainer>
  );
};

export default EmailAddress;

const styles = StyleSheet.create({});
