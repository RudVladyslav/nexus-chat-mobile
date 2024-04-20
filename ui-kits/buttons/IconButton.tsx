import React from 'react';
import {Pressable, StyleProp, StyleSheet, ViewStyle} from 'react-native';

// TypeScript Props Interface
type Props = {
  IconComponent: React.ReactElement; // Receives a pre-configured icon as a React element
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const styles = StyleSheet.create({
  button: {
    padding: 7,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const IconButton = ({IconComponent, onPress, style}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? '#f5f5f5' : 'transparent',
        },
        style,
        styles.button,
      ]}>
      {IconComponent}
    </Pressable>
  );
};

export default IconButton;
