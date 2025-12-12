import { View, Text } from 'react-native';
import { Todo } from '../types/Todo';

function TodoItem({ completed, id, text }: Todo) {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
}

export default TodoItem;
