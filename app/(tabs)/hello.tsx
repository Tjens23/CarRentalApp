import { StyleSheet } from 'react-native';
import { HelloWorldComponent } from '@/components/HelloWorldComponent';
import { ThemedView } from '@/components/ThemedView';

export default function HelloScreen() {
  return (
    <ThemedView style={styles.container}>
      <HelloWorldComponent text="Hello" name="Tobias" />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
