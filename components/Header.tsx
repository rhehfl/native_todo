import { View, Text, StyleSheet } from 'react-native';
export default function Header() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.text}>TodoList 앱</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
  },

  text: {
    fontSize: 24,
  },
});
