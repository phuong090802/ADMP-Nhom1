import {
  Feather,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeHeader from '../components/HomeHeader';
import { Colors, ICON_SIZE } from '../constants/styles';
import Account from '../screens/Account';
import Consulter from '../screens/Consulter';
import FAQ from '../screens/FAQ';
import Home from '../screens/Home';
import News from '../screens/News';

const Tab = createBottomTabNavigator();
export default function HomeNavigation() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarShowLabel: false,
        headerTitleStyle: {
          fontWeight: 'bold',
          color: Colors.primary,
          fontSize: 24,
        },

        tabBarActiveTintColor: 'white',
        tabBarActiveBackgroundColor: Colors.primary,

        tabBarInactiveTintColor: 'black',
        tabBarInactiveBackgroundColor: Colors.black10,
        tabBarItemStyle: {
          borderRadius: 12,
          marginVertical: 12,
          marginHorizontal: 16,
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
          title: 'Trang chủ',

          tabBarIcon: ({ color }) => (
            <MaterialIcons name='home-filled' size={ICON_SIZE} color={color} />
          ),
          headerRight: () => <HomeHeader />,
        }}
      />
      <Tab.Screen
        name='Question'
        component={FAQ}
        options={{
          title: 'Thư viện câu hỏi',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='frequently-asked-questions'
              size={ICON_SIZE}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name='Consulter'
        component={Consulter}
        options={{
          title: 'Danh sách tư vấn viên',
          tabBarIcon: ({ color }) => (
            <FontAwesome name='group' size={ICON_SIZE} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name='News'
        component={News}
        options={{
          title: 'Tin tức',
          tabBarIcon: ({ color }) => (
            <Ionicons name='newspaper' size={ICON_SIZE} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name='User'
        component={Account}
        options={{
          title: 'Tài khoản',
          tabBarIcon: ({ color }) => (
            <Feather name='user' size={ICON_SIZE} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
