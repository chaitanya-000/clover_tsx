import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import AsyncStorage from '@react-native-async-storage/async-storage';

const TillNameDropdown = ({
  show_AddTillModal,
  setShow_AddTillModal,
  tillList,
  setTillName,
  tillID,
  setTillID,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const handleAfterSelectingStore = eachStore => {
    setSelectedOption(eachStore.tName);
    setShowOptions(false);
    setTillID(eachStore.tID);
    AsyncStorage.setItem('tID', JSON.stringify(eachStore.tID));
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.selectButton}
          onPress={() => setShowOptions(!showOptions)}>
          <Text style={styles.selectButtonText}>
            {selectedOption || 'Select Till' || tillID}
          </Text>
          <Icon
            name={showOptions ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
            size={24}
            color="#333"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={showOptions ? styles.button_DropDownActive : styles.button}
          onPress={() => setShow_AddTillModal(!show_AddTillModal)}>
          <Text style={{fontSize: 14, color: 'white', fontWeight: '700'}}>
            Add Till
          </Text>
        </TouchableOpacity>
      </View>

      {showOptions && (
        <View style={{height: '70%', width: '90%'}}>
          <ScrollView
            style={styles.optionsContainer}
            nestedScrollEnabled={true}>
            {tillList.map(eachStore => (
              <TouchableOpacity
                style={styles.optionButton}
                key={eachStore.tID}
                onPress={() => handleAfterSelectingStore(eachStore)}>
                <Text style={styles.optionButtonText}>{eachStore.tName}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#f5f5f5",
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
    // borderWidth: 1,
  },
  selectButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '66%',
  },
  selectButtonText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  optionsContainer: {
    width: '100%',
    maxHeight: 150,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    paddingBottom: 30,
  },
  optionButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  optionButtonText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  searchInput: {
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    // paddingVertical: 12,
    // paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: '27%',
    height: '84%',
    backgroundColor: '#26AE60',
  },
  button_DropDownActive: {
    // paddingVertical: 12,
    // paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: '27%',
    height: '60%',
    backgroundColor: '#26AE60',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

export default TillNameDropdown;
