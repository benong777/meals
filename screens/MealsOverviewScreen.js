import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import MealItem from '../components/MealItem';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

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
function MealsOverviewScreen({ route, navigation }) {
  /* 
    useEffect executes after the component function was executed for the first
    time. Thus, you'll see that the header title will load the original title
    first ('MealsOverview'), and then this useEffect will execute after to set
    the header title to the 'categoryTitle'.

    To fix this, use 'useLayoutEffect' instead. It will load simultaneously with
    the MealsOverviewScreen loading instead of after.
  */
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    // Set the screen (category) title dynamically
    navigation.setOptions({
      title: categoryTitle
    });
  }, [catId, navigation]);

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
      navigation: navigation,
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