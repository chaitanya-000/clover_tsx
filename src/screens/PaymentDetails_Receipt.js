import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  BackButton,
  ButtonText,
  HalfPart,
  Header,
  InformativeFooterText,
  LineDivider,
  LineDividerText_OR,
  PageContainer,
  PageContent,
  SolidGreenButton,
  WhiteRoundedContainer,
} from '../styledComponents';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BASE_URL} from '../baseUrl';

import Receipt from './Receipt';

const PaymentDetails_Receipt = ({navigation}) => {
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [showInvoice, setShowInvoice] = useState(false);
  const [receivedData, setReceivedData] = useState(null);
  const [tId, setTid] = useState(null);
  const [transactionId, setTransactionId] = useState(null);

  const date = new Date(paymentDetails?.created_at);
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  useEffect(() => {
    const getTillId = async () => {
      try {
        const value = await AsyncStorage.getItem('tID');
        if (value !== null) {
          console.log(value);
          setTid(value);
          axios
            .post(`${BASE_URL}/TransactionSuccess`, {
              tId: JSON.parse(value),
            })
            .then(response => {
              console.log('Transaction Id-', response.data.data.transactionId);

              setPaymentDetails(response.data.data);
              setTransactionId(response.data.data.transactionId);
            })
            .catch(error => {
              console.log(error);
            });

          axios
            .post(`${BASE_URL}/TransactionReceipt`, {
              tId: JSON.parse(value),
            })
            .then(response => {
              setReceivedData(response.data);
              console.log(response.data);
            })
            .catch(error => {
              console.log(error);
            });
        }
      } catch (e) {
        console.log(e.message);
      }
    };
    getTillId();
  }, []);

  return (
    <>
      <PageContainer>
        <Header>
          <BackButton onPress={() => navigation.navigate('DrawerNavigation')}>
            <Ionicons name="md-arrow-back" size={25} color="white" />
          </BackButton>
        </Header>
        <WhiteRoundedContainer
          style={{opacity: showInvoice ? 0.1 : 1, paddingVertical: '0%'}}>
          <PageContent>
            <View style={styles.amountAndPaymentStatusContainer}>
              <Text style={styles.amount}>
                € {paymentDetails?.Amount / 100}
              </Text>
              <Text style={styles.paymentStatus}>
                {paymentDetails?.description}
              </Text>
            </View>
            <View style={styles.dateAndTimeContainer}>
              <Text style={styles.dateAndTime}>{formattedDate}</Text>
              <View style={styles.separatingDot}></View>
              <Text style={styles.dateAndTime}>{formattedTime}</Text>
            </View>
            <View style={styles.detailsReceipt}>
              <View style={styles.infoContainer}>
                <Text>Amount</Text>
                <Text>€ {paymentDetails?.Amount / 100}</Text>
              </View>
              <View style={styles.infoContainer}>
                <Text>Card Type</Text>
                <Text>{paymentDetails?.cardType}</Text>
              </View>
              <View style={styles.infoContainer}>
                <Text>Card </Text>
                <Text>{paymentDetails?.cardDetails}</Text>
              </View>
              <View style={styles.infoContainer}>
                <Text>Till ID</Text>
                <Text>{paymentDetails?.tId}</Text>
              </View>
              <View
                style={
                  ([styles.infoContainer],
                  {
                    // borderWidth: 1,
                    width: '90%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  })
                }>
                <Text style={{width: '20%'}}>Trs ID</Text>
                <Text style={{width: '60%'}}>
                  {paymentDetails?.transactionId}
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  borderWidth: 0.5,
                  borderColor: '#DEE8EF',
                  marginTop: 10,
                }}></View>
              <View style={[styles.infoContainer, {marginTop: 6}]}>
                <Text style={{fontSize: 20}}>Amount</Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '700',
                    color: 'rgba(38, 174, 96, 1)',
                  }}>
                  € {paymentDetails?.Amount / 100}
                </Text>
              </View>
            </View>
            <SolidGreenButton
              width={'100%'}
              height={'11%'}
              onPress={() => setShowInvoice(true)}>
              <ButtonText>Print to QR code</ButtonText>
            </SolidGreenButton>
            <LineDivider>
              <HalfPart></HalfPart>
              <LineDividerText_OR>OR</LineDividerText_OR>
              <HalfPart></HalfPart>
            </LineDivider>
            <TouchableOpacity>
              <InformativeFooterText>Print Receipt</InformativeFooterText>
            </TouchableOpacity>
          </PageContent>
        </WhiteRoundedContainer>
      </PageContainer>
      {showInvoice && (
        <Receipt
          setShowInvoice={setShowInvoice}
          receivedData={receivedData}
          tId={tId}
          transactionId={transactionId}
          navigation={navigation}
        />
      )}
    </>
  );
};

export default PaymentDetails_Receipt;

const styles = StyleSheet.create({
  amountAndPaymentStatusContainer: {
    width: '100%',
    height: '6%',
    justifyContent: 'space-between',
    // borderWidth: 1,
  },
  amount: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgba(38, 174, 96, 1)',
  },
  paymentStatus: {
    fontSize: 11,
    color: 'rgba(130, 130, 130, 1)',
    fontWeight: '600',
  },
  dateAndTimeContainer: {
    width: '60%',
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
  },
  dateAndTime: {
    fontSize: 18,
    fontWeight: '600',
  },
  separatingDot: {
    width: 5,
    aspectRatio: 1,
    backgroundColor: 'black',
    borderRadius: 39,
  },
  detailsReceipt: {
    width: '100%',
    height: '50%',
    backgroundColor: '#F6F8FA',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#DEE8EF',
    marginBottom: '5%',
    padding: '3%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
  },
  infoContainer: {
    width: '90%',
    height: '15%',
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
