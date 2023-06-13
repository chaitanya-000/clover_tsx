import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  BackButton,
  Header,
  PageContainer,
  PageContent,
  SolidGreenButton,
  WhiteRoundedContainer,
  responsiveFontSize,
} from '../styledComponents';

const Dashboard = () => {
  return (
    <PageContainer>
      <Header></Header>
      <WhiteRoundedContainer>
        <PageContent>
          <View style={styles.container}>
            <Text style={styles.screenName}>Dashboard</Text>
            <View style={styles.imageAndTextContainer}>
              <Image source={require('../images/comingSoon.png')} />
              <Text style={{marginTop: '2%', fontWeight: '600'}}>
                Coming Soon
              </Text>
              <Text style={{marginTop: '2%'}}>
                See the settings tab to claim balance{' '}
              </Text>
              <SolidGreenButton
                height={'11%'}
                width={'30%'}
                style={{marginTop: '5%'}}>
                <Text style={{color: 'white', fontWeight: '800'}}>Okay</Text>
              </SolidGreenButton>
            </View>
          </View>
        </PageContent>
      </WhiteRoundedContainer>
    </PageContainer>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  screenName: {
    fontSize: responsiveFontSize(8),
    fontWeight: '700',
    marginBottom: '5%',
  },
  imageAndTextContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
