import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ChatItem from './components/ChatItem';
import Icon from 'react-native-vector-icons/Ionicons';
import IconButton from '../../ui-kits/buttons/IconButton';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  appbar: {
    paddingHorizontal: 5,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: 'white',
  },
});

const messages = [
  {id: 1, text: 'Hello', sender: 'John'},
  {id: 2, text: 'How are you?', sender: 'Jane'},
  {id: 3, text: 'I am good, thanks!', sender: 'John'},
  {id: 4, text: 'What about you?', sender: 'John'},
  {id: 5, text: 'I am doing great!', sender: 'Jane'},
  {id: 6, text: 'Nice weather today!', sender: 'Jane'},
  {id: 7, text: 'Yes, it is!', sender: 'John'},
  {id: 8, text: 'Do you have any plans for the weekend?', sender: 'John'},
  {
    id: 9,
    text: 'Not yet, how about you? cksclksckclkcmscklsmckscmskscmskcmckslmcclkmcsklmclcmscsklcslcnlscnslcnslckn',
    sender: 'Jane',
  },
  {id: 10, text: 'I might go hiking.', sender: 'John'},
];

export default function ChatsScreen() {
  const pressMenu = () => {
    console.log('Menu button pressed');
  };

  const pressSearch = () => {
    console.log('Search button pressed');
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.appbar}>
        <IconButton
          IconComponent={<Icon name="menu" size={30} />}
          onPress={pressMenu}
        />

        <Text>Chats</Text>

        <IconButton
          IconComponent={<Icon name="search" size={30} />}
          onPress={pressSearch}
        />
      </View>

      <View style={styles.content}>
        <ScrollView bounces={false}>
          {messages.map(message => (
            <ChatItem key={message.id} message={message} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
