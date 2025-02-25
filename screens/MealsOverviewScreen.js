import { View, Text, StyleSheet, FlatList } from 'react-native';

import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

/*
  route (React Navigation):
    - Similar to 'navigation', for screens that were 'registered' in the 
      Stack.Navigator/Stack.Screen, React Navigation will give you access to 'route' as a prop:
    
    - Likewise with the 'useNavigation' hook, you can also use the 'useRoute' hook to get access..
      especially if you don't have access to the 'route' prop (shown below) in your function or 
      screen that was not registered in the Stack.Navigator/Stack.Screen in App.js:
        import { useRoute } from '@react-navigation/native';

        function() {
          const route = useRoute();
          const catId = route.params.categoryId;
        }

*/
function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;
  /*
    CategoryIds is an array with multiple categories,
    so filter will return an array of meals with our catId
  */
  const mealsToDisplay = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    }
    return (
      <MealItem {...mealItemProps} />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={mealsToDisplay} 
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
});