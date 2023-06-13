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
  SolidGreenButton,
  Header,
  PageContainer,
  PageContent,
  WhiteRoundedContainer,
  OutlinedGreenButton,
  HalfPart,
  InformativeFooterText,
  LineDivider,
} from '../styledComponents';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {responsiveFontSize} from '../styledComponents';
const Refund = ({navigation}) => {
  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={-399}>
      <PageContainer>
        <Header>
          <BackButton onPress={() => navigation.navigate('Payment')}>
            <Icon name="md-arrow-back" size={25} color="white" />
          </BackButton>
        </Header>
        <WhiteRoundedContainer>
          <PageContent>
            <View style={styles.options}>
              <View style={styles.nameAndOptionsContainer}>
                <Text style={styles.screenName}>Refund</Text>
                <View style={styles.labelAndTextInputContainer}>
                  <Text style={styles.label}>YOUR AMOUNT</Text>
                  <TextInput
                    style={styles.textInput}
                    keyboardType="number-pad"
                    placeholder="-"
                  />
                </View>
                <View style={styles.buttonsContainer}>
                  <SolidGreenButton height={'50%'} width={'40%'}>
                    <Text style={{color: 'white', fontWeight: '700'}}>
                      Cash
                    </Text>
                  </SolidGreenButton>
                  <OutlinedGreenButton height={'50%'} width={'40%'}>
                    <Text style={{color: '#26AE60', fontWeight: '700'}}>
                      Card
                    </Text>
                  </OutlinedGreenButton>
                </View>
                <LineDivider>
                  <HalfPart />
                  <Text style={{color: 'rgba(130, 130, 130, 1)'}}>OR</Text>

                  <HalfPart />
                </LineDivider>
                <TouchableOpacity>
                  <InformativeFooterText>
                    Issue refund from past transaction
                  </InformativeFooterText>
                </TouchableOpacity>
              </View>
            </View>
          </PageContent>
        </WhiteRoundedContainer>
      </PageContainer>
    </KeyboardAvoidingView>
  );
};

export default Refund;

const styles = StyleSheet.create({
  nameAndOptionsContainer: {
    width: '100%',
    height: '80%',
    // backgroundColor: "red",
    // borderWidth: 1,
  },
  screenName: {
    fontSize: responsiveFontSize(8),
    fontWeight: '700',
    marginBottom: '5%',
  },
  labelAndTextInputContainer: {
    width: '100%',
    height: '24%',
    // borderWidth: 1,
    justifyContent: 'space-between',
  },
  label: {
    color: '#828282',
    fontWeight: '500',
    fontSize: responsiveFontSize(3.2),
  },
  textInput: {
    width: '100%',
    height: '70%',
    borderWidth: 1,
    borderColor: '#DEE8EF',
    borderRadius: 10,
    backgroundColor: '#F6F8FA',
    paddingHorizontal: '6%',
    fontSize: responsiveFontSize(7),
  },
  buttonsContainer: {
    width: '100%',
    height: '40%',
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // marginTop: "%",
  },
  lineDivider: {
    width: '90%',
    height: '14%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  halfPart: {
    width: '40%',
    height: '3%',
    backgroundColor: 'rgba(224, 224, 224, 1)',
  },
  informativeFooterText: {
    color: 'rgba(38, 174, 96, 1)',
    fontWeight: '700',
    alignSelf: 'center',
  },
});
