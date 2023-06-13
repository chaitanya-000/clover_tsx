import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';

const LoadingSpinner = ({loading}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="green" animating={loading} />
    </View>
  );
};

export default LoadingSpinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9999,
  },
});
