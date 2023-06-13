import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Label,
  TextInput_Styled,
  InputContainer,
  TextInputContainer,
} from '../styledComponents';

const Phone = ({setPhone}) => {
  return (
    <InputContainer>
      <TextInputContainer>
        <Label>Phone</Label>
        <TextInput_Styled
          keyboardType="number-pad"
          onChangeText={enteredValue => {
            setPhone(enteredValue);
          }}
          maxLength={10}
        />
      </TextInputContainer>
    </InputContainer>
  );
};

export default Phone;

const styles = StyleSheet.create({});
