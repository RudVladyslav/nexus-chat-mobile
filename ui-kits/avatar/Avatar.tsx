import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

type Props = {
  image?: string;
  initials?: string;
  size?: number;
};

const Avatar = ({image, initials = 'XX', size = 50}: Props) => {
  const borderRadius = size / 2;
  const fontSize = size / 2;
  const lineHeight = size; // To center the text vertically

  return (
    <View
      style={[
        styles.container,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          width: size,
          height: size,
          borderRadius: borderRadius,
          backgroundColor: image ? 'transparent' : '#ccc', // Adjust background only if there's no image
        },
      ]}>
      {image ? (
        <Image
          source={{uri: image}}
          style={{width: '100%', height: '100%', borderRadius: borderRadius}}
        />
      ) : (
        <Text style={[styles.initials, {fontSize, lineHeight}]}>
          {initials}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  initials: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center', // Ensure text is centered horizontally
  },
});

export default Avatar;
