import 'react-native-gesture-handler';
import {useEffect} from 'react';
import QuickSale from './screens/QuickSale';
import Payment from './screens/Payment';
import Refund from './screens/Refund';
import BankDetails from './screens/BankDetails';
import {NavigationContainer} from '@react-navigation/native';
import PaymentDetails_Receipt from './screens/PaymentDetails_Receipt';
import PaymentLogs from './screens/PaymentLogs';
import ProfileUpdate from './screens/ProfileUpdate';
import Login from './screens/Login';
import Register from './screens/Register';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigation from './DrawerNavigation';
import {useStore} from 'zustand';
import useAuthStore from './store';

const Stack = createNativeStackNavigator();

export default function App() {
  const hasToken = useStore(useAuthStore, state => state.hasToken);
  const getToken = useStore(useAuthStore, state => state.getToken);

  useEffect(() => {
    getToken();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {hasToken ? (
          <>
            <Stack.Screen
              name="DrawerNavigation"
              component={DrawerNavigation}
            />
            <Stack.Screen name="PaymentLogs" component={PaymentLogs} />
            <Stack.Screen name="QuickSale" component={QuickSale} />
            <Stack.Screen name="Refund" component={Refund} />
            <Stack.Screen name="BankDetails" component={BankDetails} />
            <Stack.Screen name="ProfileUpdate" component={ProfileUpdate} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
