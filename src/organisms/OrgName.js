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

const OrgName = () => {
  return (
    <InputContainer>
      <TextInputContainer>
        <Label>Organisation Name</Label>
        <TextInput_Styled />
      </TextInputContainer>
    </InputContainer>
  );
};

export default OrgName;

const styles = StyleSheet.create({});
