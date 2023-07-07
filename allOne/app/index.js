import { StyleSheet, View, Text } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Home = () => {
    return(
    <View style={styles.container}>
           <NavigationContainer>
                name = "SignUp"
                component = {SignUpScreen}
                options={{title: 'Welcome'}}
            </NavigationContainer>
        <Text style={styles.boldText}>Welcome</Text>
    
    </View>
    
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
alignItems: 'center',
    },
    boldText: {
        fontWeight: "bold",
        paddingTop: 150,
        paddingRight: 150,
        paddingLeft: 150,
        backgroundColor: 'black',
        color: 'rgb(69, 224, 52)',
        
    }
})

export default Home;
