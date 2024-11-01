import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Colors from '../styles/Colors';

type ProductCardProps = {
  product: {
    image: string;
    title: string;
    price: number;
  };
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: Colors.white,
    margin: 4,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 120,
  },
  title: {
    fontSize: 14,
    color: Colors.textPrimary,
    marginVertical: 5,
    marginHorizontal: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 8,
    marginHorizontal: 8,
  },
});

export default ProductCard;
