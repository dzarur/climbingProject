import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './logIn'
import SignUpScreen from './SignUpScreen';
import AppScreen from './something'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Log In" component={LoginScreen} /> */}
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="App" component={AppScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;