import React from 'react'
import { View, StyleSheet } from 'react-native'
import TextComponent from './TextComponent'

const App = () => {
  return (
    <View style={styles.container}>
      <TextComponent>Texto 1</TextComponent>
      <TextComponent>Texto 2</TextComponent>
      <TextComponent>Texto 3</TextComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default App
