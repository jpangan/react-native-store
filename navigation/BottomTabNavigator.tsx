import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import {Colors} from '../constants/theme';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/Home';
import ShoppingCartScreen from '../screens/ShoppingCart';
import ProductDetailScreen from '../screens/ProductDetails';
import ProfileScreen from '../screens/Profile';
import { BottomTabParamList, HomeParamList, ProfileParamList } from '../types';
import {User} from '../components/Icons';
import ShoppingCartButton from '../components/ShoppingCartButton';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors.Flame,
        inactiveTintColor: Colors.Grease,
        adaptive: false,
        keyboardHidesTabBar: true,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home-outline" size={28} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <User fill={color}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerLeft: null,
          headerTitle: 'Home',
          headerRight: ShoppingCartButton,
         }}
      />
      <TabOneStack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
        options={{
          headerTitle: 'Product Detail',
          headerBackTitleVisible: false,
          headerRight: ShoppingCartButton,
        }}
      />
      <TabOneStack.Screen
        name="ShoppingCartScreen"
        component={ShoppingCartScreen}
        options={{
          headerTitle: 'Your Cart',
          headerBackTitleVisible: false,
        }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTitle: 'Profile',
          headerBackTitleVisible: false,
          headerRight: ShoppingCartButton,
        }}
      />
      <TabTwoStack.Screen
        name="ShoppingCartScreen"
        component={ShoppingCartScreen}
        options={{
          headerTitle: 'Your Cart',
          headerBackTitleVisible: false,
        }}
      />
    </TabTwoStack.Navigator>
  );
}
