import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import { Colors, ICON_SIZE } from '../constants/styles';
import Counsellor from '../screens/Counsellor';
import FAQ from '../screens/FAQ';
import Home from '../screens/Home';
import NewQuestion from '../screens/NewQuestion';
import News from '../screens/News';

const Tab = createBottomTabNavigator();
export default function HomeNavigation() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      // initialRouteName='NewQuestion'
      screenOptions={{
        tabBarShowLabel: false,

        headerShown: false,

        tabBarActiveTintColor: 'white',
        tabBarActiveBackgroundColor: Colors.primary,

        tabBarInactiveTintColor: 'black',
        tabBarInactiveBackgroundColor: Colors.black10,

        tabBarItemStyle: {
          borderRadius: 20,
          marginHorizontal: 16,
          marginVertical: 8,
        },

        tabBarStyle: {
          height: 64,
        },
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='home' size={ICON_SIZE} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name='FAQ'
        component={FAQ}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='frequently-asked-questions'
              size={ICON_SIZE}
              color={color}
              style={styles.icon}
            />
          ),
        }}
      />

      <Tab.Screen
        name='NewQuestion'
        component={NewQuestion}
        options={{
          tabBarItemStyle: {
            borderRadius: 24,
            marginHorizontal: 18,
            marginVertical: 4,
            backgroundColor: 'white',
          },

          tabBarIcon: ({ focused }) => (
            <Feather
              name='plus'
              size={40}
              color='blue'
              style={[
                styles.newQuestionIcon,
                focused
                  ? styles.newQuestionIconInactive
                  : styles.newQuestionIconActive,
              ]}
            />
          ),
        }}
      />

      <Tab.Screen
        name='Counsellor'
        component={Counsellor}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='groups' size={ICON_SIZE} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name='News'
        component={News}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='newspaper-variant-outline'
              size={ICON_SIZE}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  newQuestionIcon: {
    textAlign: 'center',
    verticalAlign: 'middle',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  newQuestionIconInactive: {
    backgroundColor: Colors.primary,
    color: 'white',
  },
  newQuestionIconActive: {
    backgroundColor: 'white',
    color: Colors.primary,
  },
});
