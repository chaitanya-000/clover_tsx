import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {BASE_URL} from './baseUrl';
import {Alert} from 'react-native';

const useAuthStore = create(set => ({
  hasToken: false,

  //loading
  loading: false,

  //show splash screen

  ///Login
  login: async (email, password, re_enteredPassword) => {
    try {
      if (!email || !password || !re_enteredPassword) {
        throw new Error(
          'All fields are necessary. Please enter the credentials',
        );
      }

      if (password.length < 6) {
        throw new Error('Password should be at least 6 characters long');
      }

      if (password !== re_enteredPassword) {
        throw new Error('Passwords do not match');
      }
      set({loading: true});
      axios
        .post(`${BASE_URL}/cloverAppLoginCheckUsers`, {
          email: email,
          password: password,
        })
        .then(response => {
          set({loading: false});

          if (response.data.token) {
            AsyncStorage.setItem('token', JSON.stringify(response.data.token));
            AsyncStorage.setItem('uId', JSON.stringify(response.data.user.uId));
            set({hasToken: true});
          }
        })
        .catch(error => {
          console.log(error);
          Alert.alert(error.response.data.message[0]);
          set({loading: false});
        });
    } catch (error) {
      Alert.alert(error.message);
    }
  },

  //function for retrieving the token stored in the local storage of the device
  getToken: async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        set({hasToken: true});
      }
    } catch (e) {
      console.log(e.message);
    }
  },

  //logout
  logout: async () => {
    console.log('-------------------');
    await AsyncStorage.removeItem('token');
    set({hasToken: false});
  },
}));

export default useAuthStore;
