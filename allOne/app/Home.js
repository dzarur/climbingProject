import { StyleSheet, Button, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Home({ navigation }){
    return(
    <View style={styles.container}>
        <Text style={styles.boldText}>Home Page</Text>
        <StatusBar style = "auto"/>
        <Button 
         title="Click me to signUp!!!" 
         onPress={() => navigation.navigate("SignUp")}
         />

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
        textAlign: "center",
        
    }
})


