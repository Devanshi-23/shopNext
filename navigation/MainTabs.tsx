import {BottomTabBarProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CustomTabBar} from '../components/CustomTabBar';
import HomeScreen from '../Screens/HomeScreen';
import ProductsScreen from '../Screens/ProductsScreen';
import ProfileScreen from '../Screens/ProfileScreen';

export type MainTabParamList = {
  Home: undefined;
  Products: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

const renderCustomTabBar = (props: BottomTabBarProps) => (
  <CustomTabBar {...props} />
);

const MainTabs = () => {
  return (
    <Tab.Navigator
      tabBar={renderCustomTabBar}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          tabBarLabel: 'Products',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
