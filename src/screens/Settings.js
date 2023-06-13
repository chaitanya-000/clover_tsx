import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  BackButton,
  WhiteRoundedContainer,
  HeaderTwoButtons,
  StyledScrollView,
  ScrollViewContainer,
  LineDivider,
  width,
  height,
} from '../styledComponents';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Settings = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      style={{width: width, height: height}}
      behavior="height">
      <View style={styles.container}>
        <HeaderTwoButtons>
          <BackButton onPress={() => navigation.navigate('Home')}>
            <Ionicons name="md-arrow-back" size={25} color="white" />
          </BackButton>
          <TextInput style={styles.screenName}>Settings</TextInput>
        </HeaderTwoButtons>
        <View style={styles.HeaderBlueBackground} />
        <WhiteRoundedContainer style={styles.WhiteRoundedContainer}>
          <ScrollViewContainer>
            <StyledScrollView
              contentContainerStyle={styles.scrollViewContentContainer}>
              <TouchableOpacity
                style={styles.optionContainer}
                onPress={() => navigation.navigate('ProfileUpdate')}>
                <View style={styles.rightIconNameContainer}>
                  <TouchableOpacity style={styles.LeftIcon}>
                    <MaterialCommunityIcons
                      name="account-edit-outline"
                      size={24}
                      color="black"
                    />
                  </TouchableOpacity>
                  <Text style={styles.optionsName}>Account Settings</Text>
                </View>
                <TouchableOpacity style={styles.rightArrowIcon}>
                  <MaterialCommunityIcons
                    name="chevron-right"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </TouchableOpacity>
              <LineDivider style={styles.LineDivider} />
              <TouchableOpacity
                style={styles.optionContainer}
                onPress={() => navigation.navigate('BankDetails')}>
                <View style={styles.rightIconNameContainer}>
                  <TouchableOpacity style={styles.LeftIcon}>
                    <MaterialCommunityIcons
                      name="bank"
                      size={24}
                      color="black"
                    />
                  </TouchableOpacity>
                  <Text style={styles.optionsName}>Bank Details</Text>
                </View>
                <TouchableOpacity style={styles.rightArrowIcon}>
                  <MaterialCommunityIcons
                    name="chevron-right"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </TouchableOpacity>
            </StyledScrollView>
          </ScrollViewContainer>
        </WhiteRoundedContainer>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  scrollViewContentContainer: {
    paddingBottom: '17%',
    paddingHorizontal: '3%',
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
  optionContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
  },
  LeftIcon: {
    marginRight: 20,
  },
  rightArrowIcon: {
    marginLeft: '30%',
  },
  optionsName: {
    fontSize: 18,
  },
  rightIconNameContainer: {
    width: '60%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
  },
  screenName: {
    position: 'absolute',
    top: '40%',
    left: '48%',
    fontSize: 20,
    color: 'white',
    fontWeight: '800',
  },
  WhiteRoundedContainer: {position: 'absolute', top: '20%'},
  LineDivider: {backgroundColor: '#E0E0E0', height: 1, width: '100%'},
  container: {width: width, height: '100%'},
});
