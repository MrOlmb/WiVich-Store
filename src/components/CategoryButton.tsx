import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../styles/Colors';

type CategoryButtonProps = {
  title: string;
  imageUri: string;
  onPress: () => void;
};

const CategoryButton: React.FC<CategoryButtonProps> = ({ title, imageUri, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  title: {
    fontSize: 12,
    color: Colors.textPrimary,
  },
});

export default CategoryButton;
