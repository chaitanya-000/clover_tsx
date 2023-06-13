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

const City = ({setCity}) => {
  return (
    <InputContainer>
      <TextInputContainer>
        <Label>City</Label>
        <TextInput_Styled
          onChangeText={enteredValue => {
            setCity(enteredValue);
          }}
        />
      </TextInputContainer>
    </InputContainer>
  );
};

export default City;

const styles = StyleSheet.create({});
