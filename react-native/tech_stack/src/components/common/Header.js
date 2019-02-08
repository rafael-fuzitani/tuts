import React from "react";
import {Text, View} from "react-native";

const Header = props => {
  // Destructuring style
  const {textStyle, viewStyle} = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const grey = "#d8d8d8";
const styles = {
  viewStyle: {
    backgroundColor: grey,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    paddingTop: 45,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    elevation: 2,
    position: "relative"
  },
  textStyle: {
    fontSize: 20
  }
};

export {Header};
