import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Avatar from '../../../ui-kits/avatar/Avatar';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  view: {
    // backgroundColor: 'lightblue',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    marginBottom: 10,
    borderRadius: 5,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    gap: 10,
  },
  lastMessage: {
    color: 'grey',
    width: '100%',
    minWidth: '92%',
    maxWidth: '92%',
  },
  userName: {
    fontWeight: 'bold',
    color: 'black',
  },
  userInfoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
});

type Props = {message: any};

function ChatItem({message}: Props) {
  const navigation = useNavigation();

  const press = () => {
    navigation.navigate('Chat');
  };

  return (
    <View onTouchStart={press} style={styles.view}>
      <Avatar size={50} />
      <View style={styles.userInfoWrapper}>
        <Text style={styles.userName}>{message.sender}</Text>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.lastMessage}>
          {message.text}
        </Text>
      </View>
    </View>
  );
}

export default ChatItem;
