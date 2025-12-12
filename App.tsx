import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar as RNStatusBar,
} from 'react-native';
import Header from './components/Header';
import TodoList from './components/TodoList';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <TodoList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
  },
  header: {
    height: 80,
  },
});
