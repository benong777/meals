import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native';

function MealItem({title, imageUrl, duration, complexity, affordability, navigation }) {
  function mealPressHandler() {
    console.log('Meal item pressed!');
    navigation.navigate('MealDetails');
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        onPress={mealPressHandler}
        style={({ pressed }) => 
          // To get opacity effect in iOS when pressed
          // since android_ripple effect above doesn't work on iOS
          // * Note: 'pressed' is provided with the Pressable component
          pressed ? styles.imagePressed : null
        }
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration} mins</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  )
}

export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  imagePressed: {
    opacity: 0.5,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    padding: 8,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible', // ensure nothing goes outside of borderRadius
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  }
});