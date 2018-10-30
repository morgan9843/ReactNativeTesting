import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, Button, Alert, Text, View } from 'react-native';

export default class App extends React.Component {
  _onPressButton() {
    Alert.alert('You Better Be!')
  }
  
  render() {
    return (

      <View style={styles.container}>
          <Text style={styles.textMain}>Mushroom Identifier</Text>

        <View style={styles.buttonContainer}>
          <TouchableWithoutFeedback
            onPress={this._onPressButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Ready?</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFACB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    alignSelf: 'center',
    width: 100,
    alignItems: 'center',
    backgroundColor: "#CC1516",
    borderRadius: 10,
  },
  buttonText: {
    padding: 10,
    color: "#FEFACB",
  },
  textMain: {
    fontSize: 32,
    color: "#CC1516",
  }
});
