import {StyleSheet} from 'react-native';
import React from 'react';
import {
  InputContainer,
  SplitContainer,
  Label,
  TextInput_Styled,
} from '../styledComponents';

const FirstNameLastName = ({setFirstName, setLastName}) => {
  return (
    <InputContainer>
      <SplitContainer>
        <Label>FIRST NAME</Label>
        <TextInput_Styled
          onChangeText={enteredValue => {
            setFirstName(enteredValue);
          }}
        />
      </SplitContainer>
      <SplitContainer>
        <Label>Last Name</Label>
        <TextInput_Styled
          onChangeText={enteredValue => setLastName(enteredValue)}
        />
      </SplitContainer>
    </InputContainer>
  );
};

export default FirstNameLastName;

const styles = StyleSheet.create({});
