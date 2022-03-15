import React,{useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import RoundButon from '../components/RoundedButton';

import {colors} from '../utils/colors';
import {spacing} from '../utils/sizes';

const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);

  return (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.textInput}
        label={'What would you like to focus on?'}
        value={subject}
        onChangeText={setSubject}
      />
      <View style={styles.button}>
        <RoundButon 
          title='+' 
          size={50} 
          onPress={()=>addSubject(subject)}
          />
      </View>
    </View>
  </View>
)}

const styles = StyleSheet.create({
  container: {
  },
  inputContainer: {
    flexDirection: 'row',
    padding: spacing.lg,
    justifyContent: 'top'
  },
  textInput:{
    flex: 1,
    marginRight: spacing.sm
  },
  button: {
    justifyContent: 'center',

  }
})

export default Focus;