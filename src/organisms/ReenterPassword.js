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

const ReenterPassword = ({setRe_enteredPassword}) => {
  return (
    <InputContainer>
      <TextInputContainer>
        <Label>Re-Enter Password</Label>
        <TextInput_Styled
          textContentType="password"
          secureTextEntry
          onChangeText={value => setRe_enteredPassword(value)}
        />
      </TextInputContainer>
    </InputContainer>
  );
};

export default ReenterPassword;

const styles = StyleSheet.create({});
