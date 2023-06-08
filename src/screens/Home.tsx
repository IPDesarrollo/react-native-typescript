import React, { useContext } from 'react';
import { Box, View, Center, Heading, Text, ScrollView } from 'native-base';
import {
  Octicons,
  SimpleLineIcons,
  FontAwesome5,
  AntDesign,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';
// import Import from "../assets/svg/Import";
import { dataWorkPlanContext } from '../context/dataWorkPlan';
import { StackNavigationProps } from '../type/navigation';
import { Route } from '@interfaces/route';

type ThemeContextType = true | false;
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const Home = ({ navigation }: StackNavigationProps) => {
  const { activeCard, getItemContext, createNewItemContext, UpdateItemContext, DeleteItemContext } =
    useContext(dataWorkPlanContext);

  const infoCards: Route[] = [
    {
      id: 1,
      text: 'Importar Plan de Trabajo',
      icon: <Octicons name="download" size={24} color="black" />,
      route: 'ImportWorkPlan',
    },
    {
      id: 2,
      text: 'Revision del Conductor',
      icon: <SimpleLineIcons name="user" size={24} color="black" />,
      route: 'DriverCheckup',
    },
    {
      id: 3,
      text: 'Recolecciones',
      icon: <FontAwesome5 name="truck" size={24} color="black" />,
      route: 'Settings',
    },
    {
      id: 4,
      text: 'Sincronizacion',
      icon: <AntDesign name="sync" size={24} color="black" />,
      route: 'Settings',
    },
    {
      id: 5,
      text: 'Actualizar Datos Maestros',
      icon: <MaterialCommunityIcons name="database-arrow-up" size={24} color="black" />,
      route: 'Settings',
    },
  ];

  return (
    <View style={{ flex: 1, marginHorizontal: 20 }}>
      <Heading style={{ marginVertical: 20, marginHorizontal: 20 }}>
        Bienvenido <Heading color="emerald.400">Sergio</Heading>
        {/* {dataUser !== null ? <Text>{dataUser}</Text> : null} */}
      </Heading>
      <ScrollView w={['100%', '300']}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap">
          {infoCards.map(({ text, id, icon, route }, index) => (
            <TouchableOpacity
              // {activeCard&&(route!=="ImportWorkPlan")?(disabled={true}):null}
              disabled={activeCard || route === 'ImportWorkPlan' ? false : true}
              key={index}
              onPress={() => {
                navigation.navigate(`${route}`);
              }}>
              <Center style={index % 2 == 0 ? styles.cardSecondary : styles.cardSecondary}>
                {icon}
                <Text
                  style={{
                    textAlign: 'center',
                    marginVertical: 10,
                  }}>
                  {text}
                </Text>
              </Center>
            </TouchableOpacity>
          ))}
        </Box>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  cardPrimary: {
    backgroundColor: '#1693D9',
    height: 200,
    width: 150,
    borderColor: '#1693D9',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 3,
  },
  cardSecondary: {
    backgroundColor: 'white',
    height: 200,
    width: 150,
    borderColor: '#1693D9',
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 15,
    paddingHorizontal: 3,
  },
});

export default Home;
