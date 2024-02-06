import React, { FC } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface HeaderProps {
  avatar: string;
  username: string;
}

const Header: FC<HeaderProps> = ({ avatar, username }) => {
  return (
    <View style={styles.headerContainer}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <Text style={styles.username}>{username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Header;
