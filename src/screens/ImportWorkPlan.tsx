import React, { useContext } from 'react';
import { View, Text, Center, HStack, Input, FormControl, Button } from 'native-base';

import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import { dataWorkPlanContext } from '../context/dataWorkPlan';

interface Data {
  workPlanNumber: string;
}

const ImportWorkPlan = () => {
  const navigation = useNavigation();

  const { getData } = useContext(dataWorkPlanContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>();

  const onSubmit: SubmitHandler<Data> = (data) => {
    // console.log(`hola`);
    const { workPlanNumber } = data;
    const gatDataWorkPlan = getData(workPlanNumber);
    if (gatDataWorkPlan) {
      navigation.navigate('Home');
    }
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: "red",
      }}>
      <Text h1>Plan de Trabajo a Sincronizar</Text>
      <HStack
        space={1}
        w="90%"
        justifyContent="center"
        alignContent="space-around"
        style={{ marginVertical: 30 }}>
        <Center w="60%" h="40px">
          <FormControl isRequired>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="No. Plan de Trabajo"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="workPlanNumber"
              rules={{ required: 'Field is required', minLength: 3 }}
              defaultValue="BIO05277"
            />
          </FormControl>
        </Center>
        <Center w="30%" h="40px">
          <Center>
            <Button onPress={handleSubmit(onSubmit)}>Buscar</Button>
          </Center>
        </Center>
      </HStack>
      {/*      <HStack space={1} w="90%" justifyContent="center">
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: "muted.50",
              }}
              borderColor="muted.800"
              pl={["0", "4"]}
              pr={["0", "5"]}
              py="2"
            >
              <HStack
                space={[2, 3]}
                alignContent="center"
                justifyContent="space-between"
              >
                <Text
                  maxW="40"
                  w="35%"
                  style={{
                    textAlignVertical: "center",
                  }}
                >
                  {item.sede.length > 20 ? item.sede.slice(0, 20) : item.sede}
                </Text>
                <Text
                  style={{
                    textAlignVertical: "center",
                  }}
                >
                  peso total: {item.peso}
                </Text>
                <Spacer />
                <Button
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <MaterialCommunityIcons
                    name="information"
                    size={24}
                    color="white"
                  />
                </Button>
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
      </HStack> */}
      {/* <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      /> */}
    </View>
  );
};

export default ImportWorkPlan;
