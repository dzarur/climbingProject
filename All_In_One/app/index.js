import { Button, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const Home = () => {
    return(
    <View style={styles.container}>
        <Text style={styles.boldText}>Welcome</Text>
        <View href="google.com">
            <Button title="SignUp" />
        </View>
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
