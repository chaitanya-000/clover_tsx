import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  BackButton,
  Header,
  PageContainer,
  PageContent,
  WhiteRoundedContainer,
  width,
  height,
  responsiveFontSize,
} from '../styledComponents';

const Payment = ({navigation}) => {
  return (
    <PageContainer>
      <Header></Header>
      <WhiteRoundedContainer>
        <PageContent>
          <View style={styles.nameAndOptionsContainer}>
            <Text style={styles.screenName}>Payment</Text>
            <View style={styles.optionsContainer}>
              <View style={styles.optionLine1Horizontal1}>
                <TouchableOpacity
                  style={styles.quickSale}
                  onPress={() => navigation.navigate('QuickSale')}>
                  <Image source={require('../images/quickSale.png')} />
                  <Text style={styles.quickSaleText}>Quick Sale</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.refund}
                  onPress={() => navigation.navigate('Refund')}>
                  <Image source={require('../images/refund.png')} />
                  <Text style={styles.refundText}>Refund</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.optionLine1Horizontal2}>
                <TouchableOpacity
                  style={styles.paymentLogs}
                  onPress={() => navigation.navigate('PaymentLogs')}>
                  <Image source={require('../images/paymentLogs.png')} />
                  <Text style={styles.paymentLogsText}>Payment Logs</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </PageContent>
      </WhiteRoundedContainer>
    </PageContainer>
  );
};

export default Payment;

const styles = StyleSheet.create({
  nameAndOptionsContainer: {
    width: '100%',
    height: '80%',
  },
  screenName: {
    fontSize: responsiveFontSize(8),
    fontWeight: '700',
    marginBottom: '5%',
  },
  optionsContainer: {
    width: '100%',
    flex: 1,
    // borderWidth: 1,
    gap: 4,
  },
  optionLine1Horizontal1: {
    width: '100%',
    height: '40%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  optionLine1Horizontal2: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: '6%',
  },
  quickSale: {
    width: '40%',
    height: '94%',
    borderRadius: 15,
    borderWidth: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#F49F6929',
    backgroundColor: '#F49F6929',
  },
  quickSaleText: {
    fontSize: responsiveFontSize(5),
    color: '#F49F69',
    fontWeight: '600',
    marginTop: '2%',
  },
  refundText: {
    fontSize: responsiveFontSize(5),
    color: '#389BA3',
    fontWeight: '600',
    marginTop: '2%',
  },
  paymentLogsText: {
    fontSize: responsiveFontSize(4.6),
    color: '#FFBB63',
    fontWeight: '600',
    marginTop: '2%',
  },
  refund: {
    width: '40%',
    height: '94%',
    borderRadius: 15,
    borderWidth: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#26AE6029',
    borderColor: '#26AE6029',
  },
  paymentLogs: {
    width: '40%',
    height: '94%',
    borderRadius: 15,
    borderWidth: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFBB6329',
    borderColor: '#FFBB6329',
  },
});
