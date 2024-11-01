import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../styles/Colors';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>WIVICH</Text>
      <TextInput style={styles.searchBox} placeholder="Search" />
      <TouchableOpacity style={styles.iconButton}>
        {/* Add icon for notifications */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: Colors.white,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
  searchBox: {
    flex: 1,
    height: 35,
    backgroundColor: Colors.secondary,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  iconButton: {
    padding: 5,
  },
});

export default Header;
