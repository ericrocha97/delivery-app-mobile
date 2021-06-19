import React from "react";
import { useState } from "react";
import { Appbar, Menu } from "react-native-paper";
import { headerStyle } from "./header.style";


export const HeaderComponent = (props: HeaderComponentParams) => {

  const [visible, setVisible ] = useState(false);

  function handleGoBack() {
    props.navigation?.goBack();
  }

  function handleOpenMenu() {
    setVisible(true)
  }

  function closeMenu() {
    setVisible(false)
  }

  const goToMyDeliveries = () => {
    props.navigation?.navigate("Deliveries")
    closeMenu();
  }
  const handleLogout = () => {
    props.navigation?.reset({
      index: 0,
      routes: [{ name: "Login" }]
    })
    closeMenu();
  }

  return(
    <Appbar style={{elevation: 0}}>
      {
        props.hasBackButton ? 
          (
            <Appbar.BackAction onPress={handleGoBack} />
          ) : 
          (
            <Menu 
              visible={visible} 
              onDismiss={closeMenu}
              anchor={
                <Appbar.Action 
                  icon='menu' 
                  color={headerStyle.menu.color} 
                  onPress={handleOpenMenu}
                />
              } 
            >
              <Menu.Item
                title="My deliveries"
                onPress={goToMyDeliveries}/>
              <Menu.Item
                title="Logout"
                onPress={handleLogout}/>
            </Menu>
          )
      }
      
      <Appbar.Content title={props.title}/>
    </Appbar>
  )

}

interface HeaderComponentParams {
  hasBackButton?: boolean;
  navigation?: any;
  title: string;
}