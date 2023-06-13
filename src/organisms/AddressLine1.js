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

const AddressLine1 = () => {
  return (
    <InputContainer>
      <TextInputContainer>
        <Label>Address Line 1</Label>
        <TextInput_Styled />
      </TextInputContainer>
    </InputContainer>
  );
};

export default AddressLine1;

const styles = StyleSheet.create({});
