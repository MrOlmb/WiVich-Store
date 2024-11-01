import React from 'react';
import { SafeAreaView,View, ScrollView, Text, FlatList } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import BottomNav from '../components/BottomNav';
import CategoryButton from '../components/CategoryButton';
import Layout from '../styles/Layout';

const categories = [
  { title: 'Women', imageUri: 'https://example.com/women.jpg' },
  { title: 'Jewelry', imageUri: 'https://example.com/jewelry.jpg' },
  { title: 'Men', imageUri: 'https://example.com/men.jpg' },
  // Add more categories as needed
];

const products = [
  { image: 'https://example.com/product1.jpg', title: 'Product 1', price: 19.99 },
  { image: 'https://example.com/product2.jpg', title: 'Product 2', price: 29.99 },
  // Add more products as needed
];

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={Layout.container}>
      <Header />

      <ScrollView>
        <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Categories</Text>
          <FlatList
            data={categories}
            horizontal
            renderItem={({ item }) => (
              <CategoryButton title={item.title} imageUri={item.imageUri} onPress={() => {}} />
            )}
            keyExtractor={(item) => item.title}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Popular Products</Text>
          <FlatList
            data={products}
            numColumns={2}
            renderItem={({ item }) => <ProductCard product={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>

      <BottomNav />
    </SafeAreaView>
  );
};

export default HomeScreen;
