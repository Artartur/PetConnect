import { InputModeOptions, KeyboardTypeOptions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export interface Cards {
  text: string;
  children?: JSX.Element | JSX.Element[];
}

export interface Checkboxs extends Cards {}

export interface Buttons extends Cards {
  onPress(params: any): void;
  buttonContainerStyle?: any;
  buttonTextStyle?: any;
}

export interface defaultProps {
  value?: string;
}

export interface Icons extends defaultProps {
  color: string;
  iconStyle?: any;
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
  textInputStyle?: any;
}

export interface InputWithIcons extends Inputs, Icons {
  containerStyle?: any;
}
