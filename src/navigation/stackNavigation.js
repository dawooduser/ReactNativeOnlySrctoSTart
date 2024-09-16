import React, { Suspense, useEffect, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { nonAuthScreen, authScreen } from '../screens'
import { hide } from '../redux/reducers/spinner';
import { LazyLoader } from './src/components';
import Toast from 'react-native-toast-message';
import { SafeAreaView } from 'react-native';
import { commonStyles } from '../constant/theme';

const { } = nonAuthScreen
const { } = authScreen

const Stack = createNativeStackNavigator();

function RootNavigation() {
  const spinnerVisibilty = useSelector(x => x.spinner.visible)
  const checkAuth = useSelector(x => x.user.auth)

  const dispatch = useDispatch()
  useEffect(() => {
    if (spinnerVisibilty) dispatch(hide())
  }, [])


  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          lazy: false
        }}
        initialRouteName='SplashScreen'
      // initialRouteName={checkAuth ? "MyTabs" : "SplashScreen"}
      >

        {/* <Stack.Screen name="AddBankReceipt" component={AddBankReceipt} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App = () => {
  return <SafeAreaView style={[commonStyles.fillFullScreen]}>
    <RootNavigation />
    <LazyLoader />
    <Toast />
  </SafeAreaView>
}

export default App;