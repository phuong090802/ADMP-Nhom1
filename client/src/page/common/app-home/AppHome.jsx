import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import homeScreen from '../../user/home-screen';
import MaterialIcon from '../../../atom/material-icon';
import NavButton from '../../../molecule/nav-button';
import { colors } from '../../../../constant';
import CreateNavButton from '../../../molecule/create-nav-button';
import Layout from '../../../template/layout';

const AppHome = () => {
    const Tab = createBottomTabNavigator();
    return <Layout>
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: '#000',
                tabBarStyle: { height: 60, borderTopColor: colors.black10, borderTopWidth: 1, backgroundColor: '#fff' },
            }}>
            <Tab.Screen
                name='HomeScreen'
                component={homeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <NavButton icon={'home'} color={color} size={size} />
                    ),
                    tabBarShowLabel: false
                }}
            />
            <Tab.Screen
                name='FaqsScreen'
                component={homeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <NavButton icon={'question'} color={color} size={size} />
                    ),
                    tabBarShowLabel: false
                }}
            />
            <Tab.Screen
                name='CreateQuestionScreen'
                component={homeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <CreateNavButton icon={'question'} color={color} size={size} />
                    ),
                    tabBarShowLabel: false
                }}
            />
            <Tab.Screen
                name='CounsellorListScreen'
                component={homeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <NavButton icon={'people'} color={color} size={size} />
                    ),
                    tabBarShowLabel: false
                }}
            />
            <Tab.Screen
                name='NewsScreen'
                component={homeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <NavButton icon={'note'} color={color} size={size} />
                    ),
                    tabBarShowLabel: false
                }}
            />
        </Tab.Navigator>
    </Layout>
}

export default AppHome