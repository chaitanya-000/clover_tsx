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

const OrgAddress = ({setOrgAddress}) => {
  return (
    <InputContainer>
      <TextInputContainer>
        <Label>Organization Address</Label>
        <TextInput_Styled
          onChangeText={enteredValue => {
            setOrgAddress(enteredValue);
          }}
        />
      </TextInputContainer>
    </InputContainer>
  );
};

export default OrgAddress;

const styles = StyleSheet.create({});
