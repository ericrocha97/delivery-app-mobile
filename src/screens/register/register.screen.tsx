import React from 'react'
import { ScrollView, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { registerStyle } from './register.style';
import { HeaderComponent } from '../../components/header/header.component';
import { SafeAreaViewCustom } from '../../components/safeAreaViewCustom/safeAreaViewCustom.component';

export const RegisterScreen = () => {
  return (
    <SafeAreaViewCustom>
      <ScrollView>
        <HeaderComponent title='Register' hasBackButton />
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
          <Button style={registerStyle.button} mode='contained'>Register</Button>
        </View>
      </ScrollView>
    </SafeAreaViewCustom>
  )
}


