import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import defaultStyles from "../config/styles";

export interface Props {
  children: React.ReactNode;
  style?: any;
}

function AppText({ children, style, ...otherProps }: Props) {
  return <Text style={[defaultStyles.text, style]} {...otherProps}>{children}</Text>;
}

export default AppText;