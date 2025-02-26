import { View, Text } from 'react-native';

export default function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;

  return (
    <View>
      <Text style={{ color: 'white' }}>Meals Details Screen</Text>
      <Text style={{ color: 'white' }}>{mealId}</Text>
    </View>
  )
}
