import { Text, View, StyleSheet } from 'react-native';

export default function List({ data }) {
  return data.map((dataElement) => (
    <View key={dataElement} style={styles.listItem}>
      <Text style={styles.itemText}>{dataElement}</Text>
    </View>
    ))
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 24,
    marginVertical: 4,
    backgroundColor: '#e2b497',
  },
  itemText: {
    color: '#351401',
    textAlign: 'center',
  }
});