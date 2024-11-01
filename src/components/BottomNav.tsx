import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../styles/Colors';
import { Ionicons } from '@expo/vector-icons';

const BottomNav: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="home" size={24} color={Colors.icon} />
        <Text style={styles.navText}>Shop</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="grid" size={24} color={Colors.icon} />
        <Text style={styles.navText}>Category</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="add-circle" size={24} color={Colors.icon} />
        <Text style={styles.navText}>New</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="cart" size={24} color={Colors.icon} />
        <Text style={styles.navText}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="person" size={24} color={Colors.icon} />
        <Text style={styles.navText}>Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: Colors.secondary,
    backgroundColor: Colors.white,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
});

export default BottomNav;
