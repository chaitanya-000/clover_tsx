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

import Icon from 'react-native-vector-icons/dist/AntDesign';
import axios from 'axios';
import {BASE_URL} from '../baseUrl';
import {width, height} from '../styledComponents';

const AddStoreModal = ({
  show_AddStoreModal,
  setShow_AddStoreModal,
  getStoreName,
}) => {
  const [enteredStoreName, setEnteredStoreName] = useState(null);

  const sendStoreName = () => {
    try {
      if (!enteredStoreName) {
        throw new Error('Store name cannot be empty !');
      }
      if (enteredStoreName.length <= 2) {
        throw new Error('Enter a valid store name');
      }
      axios
        .post(`${BASE_URL}/AddShop`, {
          mainOrName: enteredStoreName,
        })
        .then(response => {
          if (response.data.data) {
            getStoreName();
          }
          setShow_AddStoreModal(false);
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
      onPress={() => setShow_AddStoreModal(false)}>
      <Pressable
        style={styles.modal}
        onPress={() => setShow_AddStoreModal(true)}>
        <View style={styles.modal_BrandName}>
          <Text style={{fontSize: 23, fontWeight: '700'}}>Add store</Text>
          <TouchableOpacity>
            <Icon
              name="close"
              size={25}
              color="black"
              onPress={() => setShow_AddStoreModal(false)}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.textInputAndButton}>
          <TextInput
            style={styles.textInput}
            onChangeText={enteredValue => {
              setEnteredStoreName(enteredValue);
            }}
          />
          <TouchableOpacity
            onPress={sendStoreName}
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

export default AddStoreModal;

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
