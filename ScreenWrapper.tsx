import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
type Props = {
    children: React.ReactNode
}
const ScreenWrapper: React.FC<Props> = ({ children }) => {
  return (
    <ImageBackground
      source={require('./assets/pexels.jpg')} // Replace with your background image path
      style={styles.background}
      resizeMode='cover'
    >
      <View style={styles.overlay}>
        {children}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(100, 99, 99, 0.8)', // Optional: Add an overlay to make text more readable
  },
});

export default ScreenWrapper;