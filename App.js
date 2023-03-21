import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Speech from "expo-speech";

export default function App() {
  const [text, setText] = useState("");
  
  const speak = () => {
    const thingToSay = text;
    Speech.speak(thingToSay);
  }

  return (
    <View style={styles.container}>
      <TextInput 
      style={{width:200, borderColor: 'gray', borderWidth:1, marginBottom:10}}
      onChangeText={text => setText(text)}  value={text}/>
      <Button title="Press to hear text" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
