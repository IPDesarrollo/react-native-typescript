import React, { SetStateAction, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Box, Flex, Button, Text } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { AnimatePresence, View } from 'moti';

import {
  ListCheckTruck1,
  ListCheckTruck2,
  ListCheckTruck3,
  ListCheckTruck4,
  ListCheckTruck5,
  ListCheckTruck6,
  ListCheckTruck7,
  ListCheckTruck8,
  ListCheckTruck9,
} from './ListCheckTruck';
// import TruckImage from "../../assets/isolated_white_van_over_transparent_surface.jpg";

const CheckList = () => {
  const optionsButton = [
    { nameButton: 'Paso1', action: 'Paso1' },
    { nameButton: 'Paso2', action: 'Paso2' },
    { nameButton: 'Paso3', action: 'Paso3' },
    { nameButton: 'Paso4', action: 'Paso4' },
    { nameButton: 'Paso5', action: 'Paso5' },
    { nameButton: 'Paso6', action: 'Paso6' },
    { nameButton: 'Paso7', action: 'Paso7' },
    { nameButton: 'Paso8', action: 'Paso8' },
    { nameButton: 'Paso9', action: 'Paso9' },
  ];

  const [dataSendTruck, setDataSendTruck] = useState([]);
  const [optionModalForm, setOptionModalForm] = useState<SetStateAction<string | null>>(null);

  const updateDataTruck = (datos) => {
    console.log(datos);
    setDataSendTruck(datos);
  };

  return (
    <View style={styles.container}>
      {/* <Image
        source={{
          uri: `https://img.freepik.com/free-vector/cargo-semi-truck-with-trailer-realistic-vector_1441-758.jpg?w=826&t=st=1683247733~exp=1683248333~hmac=a29e65dfd7398c405dd8500df09463db4cb45e476cfbb37f000c7e1df6934fd7.jpg`,
        }}
        alt="Alternate Text"
        resizeMode="contain"
        size="2xl"
      /> */}
      <Box style={styles.boxForm}>
        <AnimatePresence exitBeforeEnter>
          {optionModalForm === 'Paso1' && (
            <ListCheckTruck1
              updateDataTruck={updateDataTruck}
              dataSendTruck={dataSendTruck}
              key="Paso1"
            />
          )}
          {optionModalForm === 'Paso2' && (
            <ListCheckTruck2
              updateDataTruck={updateDataTruck}
              dataSendTruck={dataSendTruck}
              key="Paso2"
            />
          )}
          {optionModalForm === 'Paso3' && (
            <ListCheckTruck3
              updateDataTruck={updateDataTruck}
              dataSendTruck={dataSendTruck}
              key="Paso3"
            />
          )}
          {optionModalForm === 'Paso4' && (
            <ListCheckTruck4
              updateDataTruck={updateDataTruck}
              dataSendTruck={dataSendTruck}
              key="Paso4"
            />
          )}
          {optionModalForm === 'Paso5' && (
            <ListCheckTruck5
              updateDataTruck={updateDataTruck}
              dataSendTruck={dataSendTruck}
              key="Paso5"
            />
          )}
          {optionModalForm === 'Paso6' && (
            <ListCheckTruck6
              updateDataTruck={updateDataTruck}
              dataSendTruck={dataSendTruck}
              key="Paso6"
            />
          )}
          {optionModalForm === 'Paso7' && (
            <ListCheckTruck7
              updateDataTruck={updateDataTruck}
              dataSendTruck={dataSendTruck}
              key="Paso7"
            />
          )}
          {optionModalForm === 'Paso8' && (
            <ListCheckTruck8
              updateDataTruck={updateDataTruck}
              dataSendTruck={dataSendTruck}
              key="Paso8"
            />
          )}
          {optionModalForm === 'Paso9' && (
            <ListCheckTruck9
              updateDataTruck={updateDataTruck}
              dataSendTruck={dataSendTruck}
              key="Paso9"
            />
          )}
        </AnimatePresence>
      </Box>
      <Flex direction="row" mb="2.5" mt="1.5" w="100%" wrap="wrap">
        {optionsButton.map(({ nameButton, action }) => (
          <Button
            key={nameButton}
            onPress={() => {
              setOptionModalForm(`${action}`);
            }}>
            {nameButton}
          </Button>
        ))}
        {/* <Text>{dataSendTruck}</Text> */}
      </Flex>
    </View>
  );
};

export default CheckList;

const styles = StyleSheet.create({
  shape: {
    justifyContent: 'center',
    height: 250,
    width: 250,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: 'white',
  },
  boxForm: {
    marginVertical: 20,
    width: '90%',
    height: '65%',
    // backgroundColor: 'red',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
