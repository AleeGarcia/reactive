import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import Body from './Body';
import Social from './Social';

interface Props {
  avatar: string;
  username: string;
  text: string;
  image: string;
  comments: number;
  reposts: number;
  likes: number;
}

const Feed: FC<Props> = ({
  avatar,
  username,
  text,
  image,
  comments,
  reposts,
  likes,
}) => {
  return (
    <View style={styles.container}>
      <Header avatar={avatar} username={username} />
      <Body text={text} image={image} />
      <Social comments={comments} reposts={reposts} likes={likes} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderRadius: 5,
    margin: 5,
    width: "95%",
    padding: 20,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
});



export default Feed;