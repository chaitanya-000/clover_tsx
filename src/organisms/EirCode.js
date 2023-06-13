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

const EirCode = ({setEircode}) => {
  return (
    <InputContainer>
      <TextInputContainer>
        <Label>Eircode</Label>
        <TextInput_Styled
          onChangeText={enteredValue => {
            setEircode(enteredValue);
          }}
        />
      </TextInputContainer>
    </InputContainer>
  );
};

export default EirCode;

const styles = StyleSheet.create({});
