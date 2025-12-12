import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Todo } from '../../types/Todo';
import { useState } from 'react';

interface TodoInputProps {
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoInput({ setTodo }: TodoInputProps) {
  const [input, setInput] = useState('');

  const addTodo = (newTodo: Todo) => {
    setTodo((prev) => [...prev, newTodo]);
  };

  const handleChangeText = (text: string) => {
    setInput(text);
  };

  const onSubmit = () => {
    if (input.trim().length === 0) {
      return;
    }
    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    addTodo(newTodo);
    setInput('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="할 일을 입력하세요"
        style={styles.input}
        value={input}
        onChangeText={handleChangeText}
        onEndEditing={onSubmit}
      />
      <TouchableOpacity style={styles.submitBtn} onPress={onSubmit}>
        <Text>추가하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  input: {
    width: '70%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 18,
  },

  submitBtn: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
});

export default TodoInput;
