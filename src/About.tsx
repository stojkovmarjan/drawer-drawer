import { View, Text, StyleSheet } from "react-native";
import ScreenWrapper from "../ScreenWrapper";
import { SafeAreaView } from "react-native-safe-area-context";

const About = () => {
    return (
        <ScreenWrapper >
            <SafeAreaView style={styles.container}>
        <View >
            <Text style={styles.text} >About Screen</Text>
        </View>
        </SafeAreaView>
        </ScreenWrapper>

    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 50,
  },
  text: {
    color: 'white',
  }
});
export default About;