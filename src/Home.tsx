import { View, Text, StyleSheet, Button } from "react-native";
import ScreenWrapper from "../ScreenWrapper";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../AppNavigation";

const Home = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <ScreenWrapper>
            <SafeAreaView style={styles.container}>
                <View  >
                    <Text style={styles.text} >Home Screen</Text>

                </View>
                <View style={{ padding: 20, justifyContent: 'center', alignItems: 'center'}} >
                    <Button
                        title="Go to About"
                        onPress={() => navigation.navigate('About')}
                    />
                </View>
            </ SafeAreaView>
        </ScreenWrapper>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: 70,
    },
    text: {
        color: 'white',
    }
});

export default Home;