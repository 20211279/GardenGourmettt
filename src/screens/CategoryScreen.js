import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import vegetablesicon from '../../assets/vegicon.png';
import fruitsicon from '../../assets/fruitsicon.png';
import breadicon from '../../assets/breadicon.png';

import vegetable1 from '../../assets/veggie/Broccoli.jpg';
import vegetable2 from '../../assets/veggie/Calabasa.jpg';

import fruit1 from '../../assets/Fruits/Apple.jpg';
import fruit2 from '../../assets/Fruits/Banana.jpg';

import bread1 from '../../assets/breads/French Bread.jpg';
import bread2 from '../../assets/breads/Monay.webp';
import bread3 from '../../assets/breads/Stick Bread.jpg';
import fruit4 from '../../assets/Fruits/Grapes.jpg';

const Stack = createStackNavigator();

const VegetableScreen = ({ route }) => {
  const navigation = useNavigation();
  const [showDetails, setShowDetails] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);

  const toggleDetails = (image, title) => {
    setShowDetails(!showDetails);
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.imageGrid}>
        <TouchableOpacity onPress={() => toggleDetails(vegetable1, "Vegetable 1")} style={styles.imageContainer}>
          <Image source={vegetable1} style={styles.image} />
          <Text style={styles.imageTitle}>Broccoli</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleDetails(vegetable2, "Vegetable 2")} style={styles.imageContainer}>
          <Image source={vegetable2} style={styles.image} />
          <Text style={styles.imageTitle}>SQUASH</Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal visible={showDetails} animationType="slide">
        <View style={styles.modalContainer}>
          {selectedImage && (
            <Image source={selectedImage} style={styles.modalImage} />
          )}
          <Text style={styles.modalText}>Norem</Text><Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id tortor ut elit varius commodo sit amet ac magna. Nullam euismod euismod lorem nec hendrerit. Suspendisse potenti. Sed interdum libero eget ante ultrices condimentum. Duis et elit eu massa commodo ultrices. Donec vel odio eu risus aliquam auctor. 
          </Text>
          <Text>
            Phasellus eget libero id turpis fermentum scelerisque. Aliquam erat volutpat. Ut non ex et quam aliquam convallis.
          </Text>
          <Button title="Close" onPress={() => navigation.goBack()} />
        </View>
      </Modal>
    </View>
  );
};

const FruitScreen = ({ route }) => {
  const navigation = useNavigation();
  const [showDetails, setShowDetails] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);

  const toggleDetails = (image, title) => {
    setShowDetails(!showDetails);
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.imageGrid}>
        <TouchableOpacity onPress={() => toggleDetails(fruit1, "fruit Image 1")} style={styles.imageContainer}>
          <Image source={fruit1} style={styles.image} />
          <Text style={styles.imageTitle}>Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleDetails(fruit2, "fruit Image 2")} style={styles.imageContainer}>
          <Image source={fruit2} style={styles.image} />
          <Text style={styles.imageTitle}>Banana</Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal visible={showDetails} animationType="slide">
        <View style={styles.modalContainer}>
          {selectedImage && (
            <Image source={selectedImage} style={styles.modalImage} />
          )}
          <Text style={styles.modalText}>Norem</Text><Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id tortor ut elit varius commodo sit amet ac magna. Nullam euismod euismod lorem nec hendrerit. Suspendisse potenti. Sed interdum libero eget ante ultrices condimentum. Duis et elit eu massa commodo ultrices. Donec vel odio eu risus aliquam auctor. 
          </Text>
          <Text>
            Phasellus eget libero id turpis fermentum scelerisque. Aliquam erat volutpat. Ut non ex et quam aliquam convallis.
          </Text>
          <Button title="Close" onPress={() => navigation.goBack()} />
        </View>
      </Modal>
    </View>
  );
};

const BreadOtherScreen = ({ route }) => {
  const navigation = useNavigation();
  const [showDetails, setShowDetails] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);

  const toggleDetails = (image, title) => {
    setShowDetails(!showDetails);
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.imageGrid}>
        <TouchableOpacity onPress={() => toggleDetails(bread1, "Other Image 1")} style={styles.imageContainer}>
          <Image source={bread1} style={styles.image} />
          <Text style={styles.imageTitle}>French Bread</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleDetails(bread2, "Other Image 2")} style={styles.imageContainer}>
          <Image source={bread2} style={styles.image} />
          <Text style={styles.imageTitle}>Monay</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleDetails(bread3, "Other Image 3")} style={styles.imageContainer}>
          <Image source={bread3} style={styles.image} />
          <Text style={styles.imageTitle}>Stick Bread</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleDetails(fruit4, "Other Image 4")} style={styles.imageContainer}>
          <Image source={fruit4} style={styles.image} />
          <Text style={styles.imageTitle}>Grapes</Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal visible={showDetails} animationType="slide">
        <View style={styles.modalContainer}>
          {selectedImage && (
            <Image source={selectedImage} style={styles.modalImage} />
          )}
          <Text style={styles.modalText}>Norem</Text><Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id tortor ut elit varius commodo sit amet ac magna. Nullam euismod euismod lorem nec hendrerit. Suspendisse potenti. Sed interdum libero eget ante ultrices condimentum. Duis et elit eu massa commodo ultrices. Donec vel odio eu risus aliquam auctor. 
          </Text>
          <Text>
            Phasellus eget libero id turpis fermentum scelerisque. Aliquam erat volutpat. Ut non ex et quam aliquam convallis.
          </Text>
          <Button title="Close" onPress={() => navigation.goBack()} />
        </View>
      </Modal>
    </View>
  );
};

const CategoryScreen = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={CategoryListScreen}
        options={{ headerLeft: null }}
      />
      <Stack.Screen name="Vegetables" component={VegetableScreen} />
      <Stack.Screen name="Fruit" component={FruitScreen} />
      <Stack.Screen name="Bread&Others" component={BreadOtherScreen} />
    </Stack.Navigator>
  );
};

const CategoryListScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={() => navigation.navigate('Vegetables')} style={styles.categoryContainer}>
        <Image source={vegetablesicon} style={styles.categoryIcon} />
        <Text style={styles.category}>Vegetables</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Fruit')} style={styles.categoryContainer}>
        <Image source={fruitsicon} style={styles.categoryIcon} />
        <Text style={styles.category}>Fruit</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Bread&Others')} style={styles.categoryContainer}>
        <Image source={breadicon} style={styles.categoryIcon} />
        <Text style={styles.category}>Bread&Others</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  categoryContainer: {
    width: '30%',
    margin: 10,
    alignItems: 'center',
  },
  categoryIcon: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 50,
  },
  category: {
    fontSize: 18,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  imageTitle: {
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  modalText: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default CategoryScreen;
