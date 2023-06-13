import {StyleSheet, View} from 'react-native';
import React from 'react';
import styled from 'styled-components';

const App = () => {
  const LineDividerText_OR = styled.Text`
    color: #ff0000;
    font-weight: 600;
  `;
  return (
    <View>
      <LineDividerText_OR>Test</LineDividerText_OR>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
