import { View, StyleSheet } from 'react-native';
import TodoItem from './TodoItem';
import { useState } from 'react';

const mockList = [
  { id: 1, text: '리액트 네이티브 공부하기', completed: false },
  { id: 2, text: '투두리스트 만들기', completed: true },
  { id: 3, text: '앱 배포하기', completed: false },
];
function TodoList() {
  const [todos, setTodos] = useState(mockList);
  return (
    <>
      <View>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </View>
    </>
  );
}

export default TodoList;

const styles = StyleSheet.create({});
