import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from "@react-navigation/drawer";
import Home from "./src/Home";
import About from "./src/About";

import { Pressable, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export type RootStackParamList = {
  Home: undefined;
  About: undefined;
};

const stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

type HamburgerIconProps = {
  navigation: DrawerNavigationProp<RootStackParamList>;
};

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ navigation }) => (
  <Pressable onPress={() => navigation.toggleDrawer()}>
    <Text style={{ padding: 10, fontSize: 20 }}>☰</Text>
  </Pressable>
);
const options = ({
  navigation,
}: {
  navigation: DrawerNavigationProp<RootStackParamList>;
}) => ({
  headerTransparent: true,
  headerTintColor: "white",
  headerStyle: { backgroundColor: "rgba(0, 0, 0, 0.25)" },
  headerTitleStyle: { color: "white" },
  headerLeft: () => <HamburgerIcon navigation={navigation} />,
});

const StackNavigator = () => {
    return (
        <stack.Navigator initialRouteName="Home">
            <stack.Screen name="Home" component={Home} options={options} />
            <stack.Screen name="About" component={About} options={options} />
        </stack.Navigator>
    );
};
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={StackNavigator} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};



export default AppNavigator;
