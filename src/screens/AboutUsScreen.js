import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';

const AboutUsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>About Us</Text>
      <View style={styles.content}>
        <View style={styles.section}>
        <Image source={require('..//../assets/earl.png')} style={styles.image} />
        <Text style={styles.sectionTitle}>Founder:</Text>
            <Text>Earl John O. Luchin</Text>
          </View>
          <View style={styles.section}>
          <Image source={require('..//../assets/casandracaicas.png')} style={styles.image} />
            <Text style={styles.sectionTitle}>Co-founder:</Text>
            <Text>Casandra A. Casicas</Text>
            <Image source={require('..//../assets/jerlyntagopa.jpg')} style={styles.image} />  
            <Text>Jerlyn Tagopa</Text>
          <Text style={styles.sectionTitle}>Our System</Text>
          
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id tortor ut elit varius commodo sit amet ac magna. Nullam euismod euismod lorem nec hendrerit. Suspendisse potenti. Sed interdum libero eget ante ultrices condimentum. Duis et elit eu massa commodo ultrices. Donec vel odio eu risus aliquam auctor. 
          </Text>
          <Text>
            Phasellus eget libero id turpis fermentum scelerisque. Aliquam erat volutpat. Ut non ex et quam aliquam convallis.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  Image: {
    width: '50%',
    height: '50%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 18,
  },
});

export default AboutUsScreen
