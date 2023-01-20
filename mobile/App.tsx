import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter';
import { Loading } from './src/components/Loadfing';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });

  if (!fontsLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Teste</Text>
      <StatusBar barStyle={'light-content'} backgroundColor="transparent" translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090A',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  text: {
    color: '#ffffff',
    fontFamily: 'Inter_800ExtraBold'
  }
});