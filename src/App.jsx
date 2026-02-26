import { View, Text, StyleSheet } from 'react-native';
import LoginScreen from './screens/auth/LoginScreen/LoginScreen';

function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});