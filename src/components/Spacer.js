import React from 'react';

import { View, StyleSheet } from 'react-native';

const Spacer = ({ children }) => {
  return <View style={Styles.spacer}>{children}</View>;
};

const Styles = StyleSheet.create({
  spacer: {
    margin: 15,
  },
});

export default Spacer;
