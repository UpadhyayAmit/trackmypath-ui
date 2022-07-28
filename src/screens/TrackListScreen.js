import React from 'react';

import { View, StyleSheet, Text, Button } from 'react-native';

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <Button
        title="Go to Track Details"
        onPress={() => {
          navigation.navigate('TrackDetail');
        }}
      />
    </>
  );
};

const Styles = StyleSheet.create({});

export default TrackListScreen;
