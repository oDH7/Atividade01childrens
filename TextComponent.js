import React from 'react'
import { Text, StyleSheet } from 'react-native'

const TextComponent = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
})

export default TextComponen
