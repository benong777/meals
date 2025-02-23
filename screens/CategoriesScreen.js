import { FlatList, Text } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

/*
  React Navigation:
    'Registering' a screen in the Stack.Navigator/Stack.Screen component (see JSX in App.js)
    gives access to 'navigation' as a parameter below.
    If you need access to navigation in other functions that are not 'registered',
    you can use another method:
      - pass ('forward') the 'navigation' as a prop to the function where you need it.
      - (recommended) use the 'useNavigation' hook from '@react/navigation/native' hook to get access:
          import { useNavigation } from '@react-navigation/native'

          function ...() {
            const navigation = useNavigation();   // now can access 'navigation'
          }
*/
export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
      function categoryPressHandler() {
        navigation.navigate('MealsOverview', {
          categoryId: itemData.item.id,
        });
      }

      return (
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={categoryPressHandler}
        />
      )
  }

  return (
    <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
    />
  )
}