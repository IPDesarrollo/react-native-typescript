import React, { useContext } from 'react';

import { View, HStack, Text, Button } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { dataWorkPlanContext } from '../../context/dataWorkPlan';

const DriverCheckup = ({ navigation }) => {
  const { infoWorkPlan } = useContext(dataWorkPlanContext);

  const { work_plan_number, driver_name, driver_id } = infoWorkPlan;
  console.log(work_plan_number, driver_name, driver_id);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        marginVertical: '10%',
        justifyContent: 'space-evenly',
        // backgroundColor: "red",
      }}>
      <Text>Plan de Trabajo: {work_plan_number}</Text>
      <HStack space={3}>
        <Text>Conductor: {driver_name}</Text>
        <Text>Cedula: {driver_id}</Text>
      </HStack>
      <HStack space={3}>
        <Button
          onPress={() => {
            navigation.navigate('CheckList');
          }}
          leftIcon={<MaterialCommunityIcons name="playlist-edit" size={24} color="black" />}>
          Lista de Chequeo
        </Button>
        <Button
          onPress={() => {
            navigation.navigate('Home');
          }}
          leftIcon={<MaterialIcons name="verified-user" size={24} color="black" />}>
          Verificacion
        </Button>
      </HStack>
    </View>
  );
};

export default DriverCheckup;
