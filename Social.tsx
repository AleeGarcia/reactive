import React, { FC } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface SocialProps {
  comments: number;
  reposts: number;
  likes: number;
}

const Social: FC<SocialProps> = ({ comments, reposts, likes }) => {
  return (
    <View style={styles.socialContainer}>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialText}>{comments} Comments</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialText}>{reposts} Reposts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialText}>{likes} Likes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  socialButton: {
    flex: 1,
    alignItems: 'center',

  },
  socialText: {
    fontSize: 14,
  },
});

export default Social;
