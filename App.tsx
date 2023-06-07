import 'react-native-gesture-handler';
import React, { useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, StatusBar } from 'native-base';

import { Home, ImportWorkPlan, Settings, DriverCheckup, CheckList, Login } from '@screens/index';
import { DataWorkPlan } from '@context/index';
import { AxiosInterceptor } from '@interceptors/axios.interceptor';
import { RootStackParamList } from '@type/navigation';

import Pruebas from './src/screens/Pruebas';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  AxiosInterceptor();
  const [dataLoading, setDataLoading] = useState<boolean>(true);
  const routes: Array<React.ComponentProps<typeof Stack.Screen>> = [
    {
      name: 'Home',
      component: Home,
    },
    {
      name: 'ImportWorkPlan',
      component: ImportWorkPlan,
    },
    {
      name: 'Settings',
      component: Settings,
    },
    {
      name: 'DriverCheckup',
      component: DriverCheckup,
    },
    {
      name: 'CheckList',
      component: CheckList,
    },
  ];

  return (
    <DataWorkPlan>
      <NativeBaseProvider>
        <StatusBar
          animated
          backgroundColor="transparent"
          barStyle={'light-content'}
          // translucent={true}
        />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!dataLoading ? (
              <Stack.Screen
                name="Login"
                children={() => <Login setDataLoading={setDataLoading} dataLoading={dataLoading} />}
                // children={() => <Prueba />}
                // component={Pruebas}
                options={{ headerShown: false }}
              />
            ) : (
              <>
                {routes.map((routeConfig) => (
                  <Stack.Screen key={routeConfig.name} {...routeConfig} />
                ))}
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </DataWorkPlan>
  );
}
