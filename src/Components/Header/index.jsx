import React from 'react';

import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={require('../../assets/send.png')} style={styles.send} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 2,
  },
  send: {
    height: 23,
    width: 23,
  },
});
