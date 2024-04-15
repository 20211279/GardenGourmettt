import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import vegetables from '../../assets/vegetables.png';
import fruits from '../../assets/2.png';
import bread from '../../assets/breadothers.png';

const HomeScreen = () => {
  const navigation = useNavigation();
  
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  // Define a fixed size for the images
  const imageSize = 100;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Get your groceries delivered to your home</Text>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => navigateToScreen('VegetablesScreen')} style={styles.imageWrapper}>
          <Image
            source={vegetables}
            style={[styles.image, { width: imageSize, height: imageSize }]}
            resizeMode="contain"
          />
          <Text style={styles.categoryText}>Vegetables</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('FruitsScreen')} style={styles.imageWrapper}>
          <Image
            source={fruits}
            style={[styles.image, { width: imageSize, height: imageSize }]}
            resizeMode="contain"
          />
          <Text style={styles.categoryText}>Fruits</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('OtherScreen')} style={styles.imageWrapper}>
          <Image
            source={bread}
            style={[styles.image, { width: imageSize, height: imageSize }]}
            resizeMode="contain"
          />
          <Text style={styles.categoryText}>Bread & Others</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  imageWrapper: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  categoryText: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default HomeScreen
