import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/Home";
import About from "./src/About";

export type RootStackParamList = {
  Home: undefined;
  About: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();


const AppNavigator = () => {
  const options = {
      headerTransparent: true,
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'rgba(0, 0, 0, 0.25)' },
      headerTitleStyle: { color: 'white' }, // Optional: Change title color
  };
  return (

      <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
              name="Home"
              component={Home}
              options={options}
          />
          <Stack.Screen name="About" component={About} options={options} />
      </Stack.Navigator>

  );
};

export default AppNavigator;
