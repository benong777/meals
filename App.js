import { StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoryScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
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
            // // Dynamically set the screen header title using route/navigation
            // // * Note: params below was provided when navigating from the previous screen (MealsCategories)
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId
            //   }
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <CategoryScreen /> */}
    </>    
  );
}

const styles = StyleSheet.create({
});
