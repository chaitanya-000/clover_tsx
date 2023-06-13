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

const Country = ({setCountry}) => {
  return (
    <InputContainer>
      <TextInputContainer>
        <Label>Country</Label>
        <TextInput_Styled
          onChangeText={enteredValue => {
            setCountry(enteredValue);
          }}
        />
      </TextInputContainer>
    </InputContainer>
  );
};

export default Country;

const styles = StyleSheet.create({});
