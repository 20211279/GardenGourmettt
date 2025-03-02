import { View, Text,  Image, StyleSheet } from 'react-native'
import React from 'react'
import newlogo from '..//../assets/newlogo.png';

const Header = () => {
  return (
    <View style= {styles.header}>

        <Image source={newlogo} style={styles.logoheader}/>
        <Text style={styles.HeaderTitle}>Garden Gourmet</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        paddingTop: 10,
        alignItems: 'center',
        backgroundColor: '#f5f5f5', 
    },
    logoheader: {
      width: 80,
      height: 80
    },
    HeaderTitle: {
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
        color: 'black',  
    }

   
  });

export default Header