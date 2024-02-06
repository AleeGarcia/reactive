import React, { FC } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface BodyProps {
  text: string;
  image: string;
}

const Body: FC<BodyProps> = ({ text, image }) => {
  return (
    <View style={styles.bodyContainer}>
      <Text style={styles.bodyText}>{text}</Text>
      <Image source={{ uri: image }} style={styles.bodyImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    padding: 10,
  },
  bodyText: {
    fontSize: 14,
  },
  bodyImage: {
    width: '100%',
    height: 200,
    marginTop: 10,
    borderRadius: 8,
  },
});

export default Body;
