import { InputModeOptions, KeyboardTypeOptions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigationEventMap } from "@react-navigation/stack";

export interface Buttons extends Cards {
  onPress(params: any): void;
  buttonContainerStyle?: any;
  buttonTextStyle?: any;
}
export interface Cards {
  containerStyle?: any;
  children?: JSX.Element | JSX.Element[];
  onPress?: (params: any) => void;
  text?: string;
  viewStyle?: any;
}

export interface Checkboxs extends Cards {}

export interface DefaultProps {
  value?: string;
}

export interface Headers {
  showIcon: boolean;
  text: string;
}

export interface Icons extends DefaultProps {
  color: string;
  iconStyle?: any;
  name: keyof typeof Ionicons.glyphMap;
  size: number;
}

export interface Inputs extends DefaultProps {
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
export interface Modals {
  buttonText?: string;
  children?: JSX.Element | JSX.Element[];
  onClose: (params: any) => void;
  visible?: boolean;
}

export type propsNavigationStack = {
  AdoptionScreen: undefined;
  ConfirmReportScreen: { onFormSubmit: FormSubmitHandler };
  Login: undefined;
  MainScreen: undefined;
  Register: undefined;
  ReportScreen: undefined;
  StatusScreen: undefined;
};

export type propsStack = StackNavigationEventMap<propsNavigationStack>;
export interface Selects {
  containerStyle?: any;
  fieldMapping: Array<any>;
  label: string;
  onChange: (value: string) => void;
  pickerStyle?: any;
  value: string;
}

export type TextInputChangeHandler = (text: string) => void;

