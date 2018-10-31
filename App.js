import React from 'react'
import { TouchableWithoutFeedback, Alert, Text, View } from 'react-native'
import styles from './styles/styles'

export default class App extends React.Component {
  _onPressButton () {
    Alert.alert('You Better Be!')
  }

  render () {
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
    )
  }
}