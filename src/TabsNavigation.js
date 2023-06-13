import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from './screens/Dashboard';
import Payment from './screens/Payment';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TabsNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Payment"
      screenOptions={{
        headerShown: false,
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
        tabBarStyle: {
          height: 65,
          paddingVertical: 3,
          paddingBottom: 15,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        },
        tabBarLabelStyle: {
          fontSize: 11,
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarActiveTintColor: 'rgba(38, 174, 96, 1)',
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color, size, focused}) => (
            <MaterialIcons
              name="dashboard"
              size={23}
              color={focused ? 'rgba(38, 174, 96, 1)' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Payment"
        component={Payment}
        options={{
          tabBarActiveTintColor: 'rgba(38, 174, 96, 1)',

          tabBarLabel: 'Payment',
          tabBarIcon: ({color, size, focused}) => (
            <MaterialIcons
              name="payment"
              size={23}
              color={focused ? 'rgba(38, 174, 96, 1)' : 'gray'}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Loyalty"
        component={Loyalty}
        options={{
          tabBarActiveTintColor: 'rgba(38, 174, 96, 1)',

          tabBarLabel: 'Loyalty',
          tabBarIcon: ({color, size, focused}) => (
            <MaterialIcons
              name="loyalty"
              size={23}
              color={focused ? 'rgba(38, 174, 96, 1)' : 'gray'}
            />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="Analytics"
        component={Analytics}
        options={{
          tabBarActiveTintColor: 'rgba(38, 174, 96, 1)',

          tabBarLabel: 'Analytics',
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons
              name="google-analytics"
              size={23}
              color={focused ? 'rgba(38, 174, 96, 1)' : 'gray'}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default TabsNavigation;

const styles = StyleSheet.create({});
