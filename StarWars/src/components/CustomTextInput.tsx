import React, { useRef } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import Search from "./svg/Search.tsx";
import { colors } from "../utils/colors.ts";

interface CustomTextInputProps {
  onChangeText?: (text: string) => void;
  text?: string;
  placeholder?: string;
  maxLength?: number;
  multiline?: boolean;
  focusedAutomatically?: boolean;
  keyboardType?: string;
  isError?: boolean;
  onSubmitEditing?: () => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  onChangeText = () => {},
  text = '',
  placeholder = '',
  maxLength = 100,
  multiline = false,
  focusedAutomatically = true,
  keyboardType,
}) => {
  const textInputRef = useRef<TextInput>(null);

  return (
    <View style={inputStyles.containerInput}>
      <TouchableOpacity onPress={() => {}}>
        <Search />
      </TouchableOpacity>
      <TextInput
        ref={textInputRef}
        multiline={multiline}
        maxLength={maxLength}
        value={text}
        autoFocus={focusedAutomatically}
        onChangeText={onChangeText}
        style={inputStyles.input}
        placeholder={placeholder}
        placeholderTextColor={'#A8A8AE'}
        inputMode={keyboardType as TextInputProps['inputMode']}
      />
    </View>
  );
};

const inputStyles = StyleSheet.create({
  containerInput: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    paddingVertical: 10,
    paddingHorizontal: 8,
    height: 52,
    width: '100%',
    backgroundColor: 'transparent'
  },
  image: {
    width: 24,
    height: 24,
  },
  input: {
    width: '100%',
    height: '100%',
    color: colors.black,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
  },
});

export default CustomTextInput;
