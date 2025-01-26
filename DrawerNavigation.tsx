import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./src/Home";
import About from "./src/About";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    const options = {
        headerTransparent: true,
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'rgba(0, 0, 0, 0.25)' },
        headerTitleStyle: { color: 'white' },
    };
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} options={options} />
            <Drawer.Screen name="About" component={About} options={options} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigation;