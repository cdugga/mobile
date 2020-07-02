import React from "react";
import { Text, StyleSheet } from "react-native";

export default class ComponentsScreen extends React.Component {

  render(){
    return <Text style={styles.text}>Mayo 4 Sam 2020 </Text>;
  }
}

// const HomeScreen = () => {
//   return <Text style={styles.text}>Mayo 4 Sam 2020 </Text>;
// };

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

// export default HomeScreen;
