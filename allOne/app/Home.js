import { StyleSheet, Button, View, Text } from 'react-native';

export default function Home({ navigation }){
    return(
    <View style={styles.container}>
        <Text>Home Page</Text>
        <Button 
         title="Click me to signUp!!!" 
         onPress={() => navigation.navigate('SignUp')}
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
        
    }
})


