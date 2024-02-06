import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native';
import Feed from '../components/Feed';

const Tela = () => {

    const data = [{
        id:"1",
        avatar:"https://avatars.githubusercontent.com/u/42684330?v=4",
        username:"Rafael Kasper",
        coments:10,
        reposts:99,
        likes:1200,
        text:"conteúdo da postagem 1",
        image:"https://www.senacrs.com.br/assets/images/senac_logo_new.png",
        },
        {
            id:"2",
            avatar:"https://avatars.githubusercontent.com/u/42684330?v=4",
            username:"Rafael Kasper",
            coments:10,
            reposts:99,
            likes:1200,
            text:"conteúdo da postagem 1",
            image:"https://www.senacrs.com.br/assets/images/senac_logo_new.png",
            }
        ];

        return (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Feed
            avatar={item.avatar}
            username={item.username}
            comments={item.coments}
            reposts={item.reposts}
            likes={item.likes}
            text={item.text}
            image={item.image}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  </SafeAreaView>)
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 5,
    margin: 5,
    width: '95%',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default Tela;
