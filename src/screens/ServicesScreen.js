import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';

const ServicesScreen = () => {

  const handleBrowseBooks = () => {
    // Implement browsing logic here
    Alert.alert('Shop now', 'You are browsing the food!');
  };

  const handleSearchBooks = () => {
    // Implement searching logic here
    Alert.alert('Search Books', 'You are searching for foods!');
  };

  const handleViewFavorites = () => {
    // Implement view favorites logic here
    Alert.alert('View Favorites', 'You are viewing your favorite foods!');
  };

  const handleRecommendations = () => {
    // Implement recommendations logic here
    Alert.alert('Recommendations', 'You are viewing food recommendations!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Explore Our Food Services</Text>

      <TouchableOpacity style={styles.button} onPress={handleBrowseBooks}>
        <Text style={styles.buttonText}>Shop now</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSearchBooks}>
        <Text style={styles.buttonText}>Search Foods</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleViewFavorites}>
        <Text style={styles.buttonText}>View Favorites</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleRecommendations}>
        <Text style={styles.buttonText}>Recommendations</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ServicesScreen
