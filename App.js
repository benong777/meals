import { StyleSheet, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoryScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
              headerTintColor: 'white',
              headerStyle: { backgroundColor: '#351401' },
              contentStyle: { backgroundColor: '#3f2f25' }
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoryScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            /*
            // Dynamically set the screen header title using route/navigation
            // * Note: params below was provided when navigating from the previous screen (MealsCategories)
            options={({ route, navigation }) => {
              const catId = route.params.categoryId;
              return {
                title: catId
              }
            }}
            */
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailScreen}
            options={{
              title: 'Meal Details',
              /*
                Can create components/buttons in the header here, but do not have access to 
                data in that screen. Can add it directly in that screen instead using the 
                navigation prop and 'setOptions' similar to below. (see MealDetailScreen.js)
              */
              // headerRight: () => {
              //   console.log('headerRight Button pressed!')
              //   return <Button title='Login' />
              // }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <CategoryScreen /> */}
    </>    
  );
}

const styles = StyleSheet.create({
});