import { InputModeOptions, KeyboardTypeOptions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export interface defaultProps {
  value?: string;
}

export interface Icons extends defaultProps {
  color: string;
  name: keyof typeof Ionicons.glyphMap;
  size: number;
}

export type TextInputChangeHandler = (text: string) => void;

export interface Inputs extends defaultProps {
  autoComplete?: string;
  autoCorrect?: boolean;
  editable?: boolean;
  inputMode?: InputModeOptions;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
  multiline?: boolean;
  numberOfLines?: number;
  onChangeText?: TextInputChangeHandler;
  placeholder?: string;
}

export interface InputWithIcons extends Inputs, Icons {}
