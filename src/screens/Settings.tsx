import React from 'react';
import { View, Heading } from 'native-base';

import { StyleSheet } from 'react-native';

const Settings = () => {
  return (
    <View style={{ marginHorizontal: 20 }}>
      <Heading
        size="lg"
        fontWeight="600"
        color="coolGray.800"
        _dark={{
          color: 'warmGray.50',
        }}>
        Settings
      </Heading>
    </View>
  );
};

const styles = StyleSheet.create({
  cardPrimary: {
    backgroundColor: '#1693D9',
    height: 200,
    width: 150,
    borderColor: '#1693D9',
    borderWidth: 1,
    borderRadius: 15,
  },
  cardSecondary: {
    backgroundColor: 'white',
    height: 200,
    width: 150,
    borderColor: '#1693D9',
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 15,
  },
});
export default Settings;
