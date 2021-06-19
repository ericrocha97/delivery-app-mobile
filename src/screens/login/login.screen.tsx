import React from "react";
import { View  } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { SafeAreaViewCustom } from "../../components/safeAreaViewCustom/safeAreaViewCustom.component";

import { loginStyle } from "./login.style";

export const LoginScreen = () => {
  const navigation = useNavigation();

  function handleLogin() {
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }]
    })
  }

  function handleRegister() {
    navigation.navigate('Register')
  }

  
  return(
    <SafeAreaViewCustom>
      <View style={loginStyle.content}>
        <View style={loginStyle.view}>
          <Card>
            <Card.Title title="Delivery App" titleStyle={loginStyle.cardTitle} />
            <Card.Content>
              <TextInput
                label="Email"
                keyboardType="email-address"
              />
              <TextInput
                label="Password"
                secureTextEntry={true}
              />
              <Button 
                uppercase={false} 
                style={loginStyle.cardButton}
              >
                Forgot Email/Password
              </Button>
              <Button 
                onPress={handleLogin}
                mode="contained" 
                style={loginStyle.cardButton}
              >
                Login
              </Button>
              <Button 
                onPress={handleRegister}
                style={loginStyle.cardButton}
              >
                Register
              </Button>
            </Card.Content>
          </Card>
        </View>
      </View>
    </SafeAreaViewCustom>
  );
}