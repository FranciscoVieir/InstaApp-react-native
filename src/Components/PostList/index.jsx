import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function PostList({data}) {
  function loadIcon(isLiked) {
    return isLiked
      ? require('../../assets/likeada.png')
      : require('../../assets/like.png');
  }

  function showLikes(likes) {
    if (likes === 0) {
      return;
    }
    return (
      <Text style={styles.likes}>
        {likes} {likes > 1 ? 'curtidas' : 'curtida'}
      </Text>
    );
  }

  return (
    <View>
      <View style={styles.viewProfile}>
        <Image source={{uri: data.imageProfile}} style={styles.imageProfile} />
        <Text style={styles.userName}>{data.name}</Text>
      </View>

      <Image
        source={{uri: data.postImage}}
        style={styles.postImage}
        resizeMode="cover"
      />

      <View style={styles.buttonArea}>
        <TouchableOpacity>
          <Image source={loadIcon(data.isLiked)} style={styles.likeIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton}>
          <Image
            source={require('../../assets/comment.png')}
            style={styles.likeIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton}>
          <Image
            source={require('../../assets/send.png')}
            style={styles.likeIcon}
          />
        </TouchableOpacity>
      </View>

      {showLikes(data.likes)}

      <Text style={styles.footerName}>{data.name}</Text>
      <Text style={styles.footerDescription}>{data.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewProfile: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  imageProfile: {
    height: 40,
    width: 40,
    borderRadius: 25,
  },
  userName: {
    paddingLeft: 5,
    fontSize: 20,
    color: '#000',
  },
  postImage: {
    height: 400,
    alignItems: 'center',
  },
  buttonArea: {
    flexDirection: 'row',
    padding: 5,
  },
  likeIcon: {
    height: 25,
    width: 25,
    margin: 6,
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
  footerName: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  footerDescription: {
    paddingLeft: 5,
    paddingBottom: 10,
    fontSize: 15,
  },
});
