import {KeyboardAvoidingView, StyleSheet, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  BackButton,
  WhiteRoundedContainer,
  HeaderTwoButtons,
  StyledScrollView,
  ScrollViewContainer,
  ScreenName,
  TextInput_Styled,
  InputContainer,
  TextInputContainer,
  Label,
  SplitContainer,
  width,
  height,
} from '../styledComponents';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {BASE_URL} from '../baseUrl';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const ProfileUpdate = ({navigation}) => {
  const [userDetails, setUserDetails] = useState(null);
  useEffect(() => {
    const getUserId = async () => {
      try {
        const value = await AsyncStorage.getItem('uId');
        if (value !== null) {
          axios
            .post(`${BASE_URL}/RetailAccountInfo`, {
              uId: JSON.parse(value),
            })
            .then(response => {
              console.log(response.data.data[0]);
              setUserDetails(response.data.data[0]);
            })
            .catch(error => {
              console.log(error);
            });
        }
      } catch (e) {
        console.log(e.message);
      }
    };
    getUserId();
  }, []);

  return (
    <KeyboardAvoidingView
      style={{width: width, height: height}}
      behavior="height">
      <View style={{width: width, height: '100%'}}>
        <HeaderTwoButtons>
          <BackButton onPress={() => navigation.navigate('Settings')}>
            <Icon name="md-arrow-back" size={25} color="white" />
          </BackButton>
          <TextInput
            style={{
              position: 'absolute',
              top: '65%',
              left: '50%',
              fontSize: 19,
              color: 'white',
              fontWeight: '700',
            }}>
            Profile
          </TextInput>
        </HeaderTwoButtons>
        <View style={styles.HeaderBlueBackground} />
        <WhiteRoundedContainer style={{position: 'absolute', top: '20%'}}>
          <ScrollViewContainer>
            <StyledScrollView
              contentContainerStyle={styles.scrollViewContentContainer}>
              <ScreenName style={styles.screenName}>Profile Update</ScreenName>
              <InputContainer>
                <SplitContainer>
                  <Label>FIRST NAME</Label>
                  <TextInput_Styled
                    editable={false}
                    value={userDetails?.firstName}
                  />
                </SplitContainer>
                <SplitContainer>
                  <Label>Last Name</Label>
                  <TextInput_Styled
                    editable={false}
                    value={userDetails?.lastName}
                  />
                </SplitContainer>
              </InputContainer>

              <InputContainer>
                <TextInputContainer>
                  <Label>Email Address</Label>
                  <TextInput_Styled
                    editable={false}
                    value={userDetails?.email}
                  />
                </TextInputContainer>
              </InputContainer>

              <InputContainer>
                <TextInputContainer>
                  <Label>Phone</Label>
                  <TextInput_Styled
                    editable={false}
                    value={userDetails?.phone}
                  />
                </TextInputContainer>
              </InputContainer>
            </StyledScrollView>
          </ScrollViewContainer>
        </WhiteRoundedContainer>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ProfileUpdate;

const styles = StyleSheet.create({
  scrollViewContentContainer: {
    paddingBottom: '17%',
  },
  screenName: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: '5%',
  },
  HeaderBlueBackground: {
    width: '100%',
    height: '70%',
    position: 'absolute',
    top: '-10%',
    left: 0,
    alignSelf: 'center',
    backgroundColor: '#121F27',
  },
});
