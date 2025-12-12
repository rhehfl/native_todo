import { View, StyleSheet } from 'react-native';
import TodoItem from './TodoItem';
import { useState } from 'react';
import { Todo } from '../../types/Todo';

interface TodoListProps {
  todos: Todo[];
}
function TodoList({ todos }: TodoListProps) {
  return (
    <>
      <View style={styles.container}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </View>
    </>
  );
}

export default TodoList;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
