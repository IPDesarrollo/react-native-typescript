import React, { useState, useEffect } from 'react';
import { Box, StyleSheet } from 'react-native';
import { MotiView, View } from 'moti';
import { Image, Button, Checkbox, Text, Center } from 'native-base';

const ListCheckTruck1 = ({ updateDataTruck, dataSendTruck }) => {
  const [step1, setStep1] = useState(dataSendTruck);

  console.log(dataSendTruck);

  console.log('1');

  return (
    <View
      from={{
        opacity: 0,
        // scale: 0.9,
      }}
      animate={{
        opacity: 1,
        // scale: 1,
      }}
      exit={{
        opacity: 0,
        // scale: 0.9,
        duration: 0,
      }}
      transition={{
        type: 'timing',
        duration: 100,
      }}
      style={[styles.shape]}>
      <Text fontSize="2xl">Paso 1</Text>
      <Image
        source={{
          uri: 'https://img.freepik.com/free-vector/cargo-semi-truck-with-trailer-realistic-vector_1441-758.jpg?w=826&t=st=1683247733~exp=1683248333~hmac=a29e65dfd7398c405dd8500df09463db4cb45e476cfbb37f000c7e1df6934fd7.jpg',
        }}
        alt="Alternate Text"
        resizeMode="contain"
        size="2xl"
      />
      <Checkbox.Group
        style={[styles.checkboxGroup]}
        onChange={(values) => setStep1(values)}
        value={step1}>
        <Checkbox value="parachoques">
          <Text>Parachoques</Text>
        </Checkbox>
        <Checkbox value="luces">
          <Text>Luces (Todas)</Text>
        </Checkbox>
        <Checkbox value="limpia-parabrisas">
          <Text>Limpia Parabrisas</Text>
        </Checkbox>
        <Checkbox value="parabrisas">
          <Text>Parabrisas</Text>
        </Checkbox>
      </Checkbox.Group>
      <Center>
        <Button
          style={[styles.button]}
          onPress={() => {
            updateDataTruck(step1);
          }}>
          Confirm
        </Button>
      </Center>
    </View>
  );
};

const ListCheckTruck2 = ({ updateDataTruck, dataSendTruck }) => {
  const [step2, setStep2] = useState(dataSendTruck);

  console.log(dataSendTruck);

  console.log('2');

  return (
    <View
      from={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.5,
      }}
      transition={{
        type: 'timing',
        duration: 100,
      }}
      exitTransition={{
        type: 'timing',
        duration: 0,
      }}
      style={[styles.shape]}>
      <Text fontSize="2xl">Paso 1</Text>
      <Image
        source={{
          uri: 'https://img.freepik.com/free-vector/cargo-semi-truck-with-trailer-realistic-vector_1441-758.jpg?w=826&t=st=1683247733~exp=1683248333~hmac=a29e65dfd7398c405dd8500df09463db4cb45e476cfbb37f000c7e1df6934fd7.jpg',
        }}
        alt="Alternate Text"
        resizeMode="contain"
        size="2xl"
      />
      <Checkbox.Group
        style={[styles.checkboxGroup]}
        onChange={(values) => setStep2(values)}
        value={step2}>
        <Checkbox value="espejos">
          <Text>Espejos</Text>
        </Checkbox>
      </Checkbox.Group>
      <Center>
        <Button
          style={[styles.button]}
          onPress={() => {
            updateDataTruck(step2);
          }}>
          Confirm
        </Button>
      </Center>
    </View>
  );
};

const ListCheckTruck3 = ({ updateDataTruck, dataSendTruck }) => {
  const [step3, setStep3] = useState(dataSendTruck);

  console.log(dataSendTruck);

  console.log('3');

  return (
    <View
      from={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
      }}
      style={[styles.shape]}>
      <Text fontSize="2xl">Paso 1</Text>
      <Image
        source={{
          uri: 'https://img.freepik.com/free-vector/cargo-semi-truck-with-trailer-realistic-vector_1441-758.jpg?w=826&t=st=1683247733~exp=1683248333~hmac=a29e65dfd7398c405dd8500df09463db4cb45e476cfbb37f000c7e1df6934fd7.jpg',
        }}
        alt="Alternate Text"
        resizeMode="contain"
        size="2xl"
      />
      <Checkbox.Group
        style={[styles.checkboxGroup]}
        onChange={(values) => setStep3(values)}
        value={step3}>
        <Checkbox value="tanque-fijo">
          <Text>Tanque Fijo</Text>
        </Checkbox>
        <Checkbox value="tanque-tapas">
          <Text>Tanque Tapas</Text>
        </Checkbox>
        <Checkbox value="tubo-escape">
          <Text>tubo de escape</Text>
        </Checkbox>
      </Checkbox.Group>
      <Center>
        <Button
          style={[styles.button]}
          onPress={() => {
            updateDataTruck(step3);
          }}>
          Confirm
        </Button>
      </Center>
    </View>
  );
};

const ListCheckTruck4 = ({ updateDataTruck, dataSendTruck }) => {
  const [step4, setStep4] = useState(dataSendTruck);

  console.log(dataSendTruck);

  console.log('3');

  return (
    <View
      from={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
      }}
      style={[styles.shape]}>
      <Text fontSize="2xl">Paso 1</Text>
      <Image
        source={{
          uri: 'https://img.freepik.com/free-vector/cargo-semi-truck-with-trailer-realistic-vector_1441-758.jpg?w=826&t=st=1683247733~exp=1683248333~hmac=a29e65dfd7398c405dd8500df09463db4cb45e476cfbb37f000c7e1df6934fd7.jpg',
        }}
        alt="Alternate Text"
        resizeMode="contain"
        size="2xl"
      />
      <Checkbox.Group
        style={[styles.checkboxGroup]}
        onChange={(values) => setStep4(values)}
        value={step4}>
        <Checkbox value="cableado">
          <Text>Cableado (Debe estar protegido y sin cables pelados)</Text>{' '}
        </Checkbox>
        <Checkbox value="extintor-incendio-4">
          <Text> Extintores contra incendio (accesibilidad y carga)</Text>
        </Checkbox>
      </Checkbox.Group>
      <Center>
        <Button
          style={[styles.button]}
          onPress={() => {
            updateDataTruck(step4);
          }}>
          Confirm
        </Button>
      </Center>
    </View>
  );
};

const ListCheckTruck5 = ({ updateDataTruck, dataSendTruck }) => {
  const [step5, setStep5] = useState(dataSendTruck);

  console.log(dataSendTruck);

  console.log('3');

  return (
    <View
      from={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
      }}
      style={[styles.shape]}>
      <Text fontSize="2xl">Paso 1</Text>
      <Image
        source={{
          uri: 'https://img.freepik.com/free-vector/cargo-semi-truck-with-trailer-realistic-vector_1441-758.jpg?w=826&t=st=1683247733~exp=1683248333~hmac=a29e65dfd7398c405dd8500df09463db4cb45e476cfbb37f000c7e1df6934fd7.jpg',
        }}
        alt="Alternate Text"
        resizeMode="contain"
        size="2xl"
      />
      <Checkbox.Group
        style={[styles.checkboxGroup]}
        onChange={(values) => setStep5(values)}
        value={step5}>
        <Checkbox value="rin">
          <Text>Rin (Pernos partidos,tuercas sueltas)</Text>
        </Checkbox>
        <Checkbox value="5-rueda">
          <Text> 5ta Rueda(sin soldadura, pernos partidos,tuercas sueltas)</Text>
        </Checkbox>
        <Checkbox value="llantas-estado">
          <Text>Estado de las Llantas</Text>
        </Checkbox>
        <Checkbox value="llanta-repuesto">
          <Text>Llanta de Repuesto</Text>
        </Checkbox>
      </Checkbox.Group>
      <Center>
        <Button
          style={[styles.button]}
          onPress={() => {
            updateDataTruck(step5);
          }}>
          Confirm
        </Button>
      </Center>
    </View>
  );
};
const ListCheckTruck6 = ({ updateDataTruck, dataSendTruck }) => {
  const [step6, setStep6] = useState(dataSendTruck);

  console.log(dataSendTruck);

  console.log('3');

  return (
    <View
      from={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
      }}
      style={[styles.shape]}>
      <Text fontSize="2xl">Paso 1</Text>
      <Image
        source={{
          uri: 'https://img.freepik.com/free-vector/cargo-semi-truck-with-trailer-realistic-vector_1441-758.jpg?w=826&t=st=1683247733~exp=1683248333~hmac=a29e65dfd7398c405dd8500df09463db4cb45e476cfbb37f000c7e1df6934fd7.jpg',
        }}
        alt="Alternate Text"
        resizeMode="contain"
        size="2xl"
      />
      <Checkbox.Group
        style={[styles.checkboxGroup]}
        onChange={(values) => setStep6(values)}
        value={step6}>
        <Checkbox value="luces-laterales">
          <Text>Luces laterales (Todas prenden)</Text>
        </Checkbox>
        <Checkbox value="carga-aseguramiento">
          <Text>Aseguramiento y fijacion de la carga</Text>
        </Checkbox>
        <Checkbox value="carroceria-carga">
          <Text> No danos visibles de la carrocería y la plataforma de carga</Text>
        </Checkbox>
        <Checkbox value="rotulacion-un-6">
          <Text>Rotulacion del Rombo + #UN</Text>
        </Checkbox>
      </Checkbox.Group>
      <Center>
        <Button
          style={[styles.button]}
          onPress={() => {
            updateDataTruck(step6);
          }}>
          Confirm
        </Button>
      </Center>
    </View>
  );
};

const ListCheckTruck7 = ({ updateDataTruck, dataSendTruck }) => {
  const [step7, setStep7] = useState(dataSendTruck);

  console.log(dataSendTruck);

  console.log('3');

  return (
    <View
      from={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
      }}
      style={[styles.shape]}>
      <Text fontSize="2xl">Paso 1</Text>
      <Image
        source={{
          uri: 'https://img.freepik.com/free-vector/cargo-semi-truck-with-trailer-realistic-vector_1441-758.jpg?w=826&t=st=1683247733~exp=1683248333~hmac=a29e65dfd7398c405dd8500df09463db4cb45e476cfbb37f000c7e1df6934fd7.jpg',
        }}
        alt="Alternate Text"
        resizeMode="contain"
        size="2xl"
      />
      <Checkbox.Group
        style={[styles.checkboxGroup]}
        onChange={(values) => setStep7(values)}
        value={step7}>
        <Checkbox value="luces-direccionales-frenos">
          <Text>Luces, Direccionales, traseras y de freno</Text>
        </Checkbox>
        <Checkbox value="sonido-reversa">
          <Text>Sonido de Reversa</Text>
        </Checkbox>
        <Checkbox value="altura-parachoques">
          <Text>Altura de Parachoques</Text>
        </Checkbox>
      </Checkbox.Group>
      <Center>
        <Button
          style={[styles.button]}
          onPress={() => {
            updateDataTruck(step7);
          }}>
          Confirm
        </Button>
      </Center>
    </View>
  );
};
const ListCheckTruck8 = ({ updateDataTruck, dataSendTruck }) => {
  const [step8, setStep8] = useState(dataSendTruck);

  console.log(dataSendTruck);

  console.log('3');

  return (
    <View
      from={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
      }}
      style={[styles.shape]}>
      <Text fontSize="2xl">Paso 1</Text>
      <Image
        source={{
          uri: 'https://img.freepik.com/free-vector/cargo-semi-truck-with-trailer-realistic-vector_1441-758.jpg?w=826&t=st=1683247733~exp=1683248333~hmac=a29e65dfd7398c405dd8500df09463db4cb45e476cfbb37f000c7e1df6934fd7.jpg',
        }}
        alt="Alternate Text"
        resizeMode="contain"
        size="2xl"
      />
      <Checkbox.Group
        style={[styles.checkboxGroup]}
        onChange={(values) => setStep8(values)}
        value={step8}>
        <Checkbox value="rotulacion-cintas-reflectivas">
          <Text>Rotulacion con cintas reflectivas</Text>
        </Checkbox>
        <Checkbox value="rotulacion-un-8">
          <Text>Rotulacion del Rombo + #UN</Text>
        </Checkbox>
        <Checkbox value="rotulacion-numero-emergencia">
          <Text> Rotulacion del numero telefonico en caso de emergencia</Text>
        </Checkbox>
        <Checkbox value="nivel-gasolina">
          <Text>Nivel de Gasolina</Text>
        </Checkbox>
      </Checkbox.Group>
      <Center>
        <Button
          style={[styles.button]}
          onPress={() => {
            updateDataTruck(step8);
          }}>
          Confirm
        </Button>
      </Center>
    </View>
  );
};

const ListCheckTruck9 = ({ updateDataTruck, dataSendTruck }) => {
  const [step9, setStep9] = useState(dataSendTruck);

  return (
    <View
      from={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
      }}
      style={[styles.shape]}>
      <Text fontSize="2xl">Paso 1</Text>
      <Image
        source={{
          uri: 'https://img.freepik.com/free-vector/cargo-semi-truck-with-trailer-realistic-vector_1441-758.jpg?w=826&t=st=1683247733~exp=1683248333~hmac=a29e65dfd7398c405dd8500df09463db4cb45e476cfbb37f000c7e1df6934fd7.jpg',
        }}
        alt="Alternate Text"
        resizeMode="contain"
        size="2xl"
      />
      <Checkbox.Group
        style={[styles.checkboxGroup]}
        onChange={(values) => setStep9(values)}
        value={step9}>
        <Checkbox value="estado-cinturones-seguridad">
          <Text>Estado Cinturones de Seguridad</Text>
        </Checkbox>
        <Checkbox value="velocimetro-tacometro">
          <Text>Velocimetro y Tacometro</Text>
        </Checkbox>
        <Checkbox value="cornamenta">
          <Text>Cornamenta(Pito)</Text>
        </Checkbox>
        <Checkbox value="visibilidad-espejos-retrovisores">
          <Text>Visibilidad espejos retrovisores</Text>
        </Checkbox>
        <Checkbox value="extintor-incendio-9">
          <Text>Extintor contra incendio (accesibilidad y carga)</Text>
        </Checkbox>
      </Checkbox.Group>
      <Center>
        <Button
          style={[styles.button]}
          onPress={() => {
            updateDataTruck(step9);
          }}>
          Confirm
        </Button>
      </Center>
    </View>
  );
};

const styles = StyleSheet.create({
  shape: {
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    borderRadius: 25,
    marginRight: 10,
    // backgroundColor: 'blue',
  },
  shape1: {
    justifyContent: 'center',
    height: 150,
    width: 150,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#9c1aff',
  },
  button: {
    marginVertical: 15,
    width: '50%',
    marginHorizontal: 20,
  },
  checkboxGroup: {
    width: '90%',
  },
});

export {
  ListCheckTruck1,
  ListCheckTruck2,
  ListCheckTruck3,
  ListCheckTruck4,
  ListCheckTruck5,
  ListCheckTruck6,
  ListCheckTruck7,
  ListCheckTruck8,
  ListCheckTruck9,
};
