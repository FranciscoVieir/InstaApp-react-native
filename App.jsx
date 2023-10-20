import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import Header from './src/Components/Header';
import PostList from './src/Components/PostList';

function App() {
  const [feed, setFeed] = useState([
    {
      id: '1',
      name: 'Lucas Silva',
      description: 'Mais um dia de muitos bugs :)',
      imageProfile: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      postImage: 'https://sujeitoprogramador.com/instareact/foto1.png',
      isLiked: true,
      likes: 1,
    },
    {
      id: '2',
      name: 'Matheus',
      description: 'Isso sim é ser raiz!!!!!',
      imageProfile: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      postImage: 'https://sujeitoprogramador.com/instareact/foto2.png',
      isLiked: false,
      likes: 0,
    },
    {
      id: '3',
      name: 'Jose Augusto',
      description:
        'Bora trabalhar, hoje estou começando em um projeto novo aqui no sujeito, desde o backend ao frontend',
      imageProfile: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
      postImage: 'https://sujeitoprogramador.com/instareact/foto3.png',
      isLiked: false,
      likes: 3,
    },
    {
      id: '4',
      name: 'Gustavo Henrique',
      description: 'Isso sim que é TI!',
      imageProfile: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      postImage: 'https://sujeitoprogramador.com/instareact/foto4.png',
      isLiked: false,
      likes: 1,
    },
    {
      id: '5',
      name: 'Guilherme',
      description: 'Boa tarde galera do insta...',
      imageProfile: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      postImage: 'https://sujeitoprogramador.com/instareact/foto5.png',
      isLiked: false,
      likes: 32,
    },
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        keyExtractor={item => item.id}
        data={feed}
        renderItem={({item}) => <PostList data={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
