import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppNavigator from "./AppNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name="Home"
            component={AppNavigator}
            options={({ navigation }) => ({
              // Destructure navigation from options
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                  <Ionicons name="menu" size={24} color="white" /> 
                </TouchableOpacity>
              ),
            })}
          />

          {/* Add other screens here */}
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
});
