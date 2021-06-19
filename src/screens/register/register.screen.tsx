import React from 'react'
import { ScrollView, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';

import { HeaderComponent } from '../../components/header/header.component';
import { SafeAreaViewCustom } from '../../components/safeAreaViewCustom/safeAreaViewCustom.component';

import { registerStyle } from './register.style';

export const RegisterScreen = () => {
  const navigation = useNavigation();
  
  function handleSubmit() {
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }]
    })
  }

  return (
    <SafeAreaViewCustom>
      <ScrollView>
        <HeaderComponent title='Register' hasBackButton navigation={navigation} />
        <View style={registerStyle.content}>
          <TextInput 
            label='Name' 
          />
          <TextInput 
            label='Email' 
            keyboardType='email-address'
          />
          <TextInput 
            label='Password' 
            secureTextEntry={true} 
            right={<TextInput.Icon name='eye-off-outline' color={registerStyle.icon.color}/>} 
          />
          <TextInput 
            label='Confirm password' 
            secureTextEntry={true} 
            right={<TextInput.Icon name='eye-off-outline' color={registerStyle.icon.color}/>} 
          />
          <TextInput 
            label='Phone number' 
            keyboardType='phone-pad' 
          />
          <Button 
            onPress={handleSubmit}
            style={registerStyle.button} 
            mode='contained'
          >
            Register
          </Button>
        </View>
      </ScrollView>
    </SafeAreaViewCustom>
  )
}


