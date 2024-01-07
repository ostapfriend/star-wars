import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../utils/colors.ts";

interface CustomButtonProps {
  text: string,
  disabled?: boolean,
  onPress?: () => void;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
}

const CustomButton = ({
  text,
  disabled,
  onPress,
  textTransform = 'capitalize',
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[customButtonStyles.button, { opacity: disabled ? 0.5 : 1 }]}
      onPress={disabled ? undefined : onPress}
    >
      <Text style={[customButtonStyles.buttonText, { textTransform }]}>{text}</Text>
    </TouchableOpacity>
  );
}

const customButtonStyles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.red,
  },
  buttonText: {
    color: colors.red,
    fontSize: 16,
  }
});

export default CustomButton;
