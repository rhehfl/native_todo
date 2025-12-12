import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar as RNStatusBar,
} from 'react-native';
import Header from './components/Header';
import { useState } from 'react';
import { Todo } from './types/Todo';
import TodoInput from './components/todos/TodoInput';
import TodoList from './components/todos/TodoList';

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <TodoInput setTodo={setTodos} />
      <TodoList todos={todos} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
  },
});
