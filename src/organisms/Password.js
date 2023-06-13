import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {
  FirstNameLastNameContainer,
  SplitContainer,
  Label,
  TextInput_Styled,
  InputContainer,
  TextInputContainer,
} from '../styledComponents';

const Password = ({setPassword}) => {
  return (
    <InputContainer>
      <TextInputContainer>
        <Label>Password</Label>
        <TextInput_Styled
          textContentType="password"
          secureTextEntry
          onChangeText={value => setPassword(value)}
        />
      </TextInputContainer>
    </InputContainer>
  );
};

export default Password;

const styles = StyleSheet.create({});
