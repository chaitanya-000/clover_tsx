import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Alert,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {BASE_URL} from '../baseUrl';

import axios from 'axios';
import {height, width} from '../styledComponents';
const AddTillModal = ({
  getTillNameList,
  show_AddTillModal,
  setShow_AddTillModal,
  uId,
  setTillName,
  tillName,
}) => {
  const sendTillName = () => {
    console.log(tillName);
    try {
      if (!tillName) {
        throw new Error('Till name cannot be empty !');
      }
      if (tillName.length <= 1) {
        throw new Error('Enter a valid Till name');
      }
      axios
        .post(`${BASE_URL}/TillRegister`, {
          uId: JSON.parse(uId),
          tName: tillName,
        })
        .then(response => {
          if (response.data.data) {
            getTillNameList();
          }
          setShow_AddTillModal(false);
        })
        .catch(error => {
          alert(error.message);
        });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setShow_AddTillModal(false)}>
      <Pressable
        style={styles.modal}
        onPress={() => setShow_AddTillModal(true)}>
        <View style={styles.modal_BrandName}>
          <Text style={{fontSize: 23, fontWeight: '700'}}>Add Till</Text>
          <TouchableOpacity onPress={() => setShow_AddTillModal(false)}>
            <Icon name="close" size={25} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.textInputAndButton}>
          <TextInput
            style={styles.textInput}
            onChangeText={enteredValue => {
              setTillName(enteredValue);
            }}
          />
          <TouchableOpacity
            onPress={sendTillName}
            style={{
              backgroundColor: '#26ae60ed',

              height: '60%',
              width: '17%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontWeight: '900',
              }}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </TouchableOpacity>
  );
};

export default AddTillModal;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: '40%',
    // justifyContent: "center",
    // backgroundColor: "red",
  },
  modal: {
    width: '90%',
    height: '25%',
    // borderWidth: 3,
    // marginTop: "80%",
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    padding: '4%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'green',
  },
  modal_BrandName: {
    width: '100%',
    height: '25%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 2,
  },
  textInput: {
    width: '80%',
    backgroundColor: '#e9f2eb',
    height: '60%',
    borderRadius: 10,
    paddingHorizontal: '5%',
    fontSize: 20,
  },
  textInputAndButton: {
    width: '100%',
    height: '60%',
    flexDirection: 'row',
    // borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
