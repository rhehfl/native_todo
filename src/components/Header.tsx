import { View, Text, StyleSheet, StatusBar, Platform } from 'react-native';

export default function Header() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.text}>🌱</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  text: {
    fontSize: 24,
  },
});
