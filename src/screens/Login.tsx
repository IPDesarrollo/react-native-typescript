import React, { useState, Dispatch, SetStateAction, useContext } from 'react';
import { Box, Center, Stack, Heading, VStack, FormControl, Input, Button, Text } from 'native-base';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
// import { dataWorkPlanContext } from '@context/dataWorkPlan';

interface Props {
  setDataLoading: Dispatch<SetStateAction<boolean>>;
  dataLoading: boolean;
}

interface dataFormLogin {
  firstName: string;
  user: string;
  password: string;
}

interface IFormInput {
  firstName: string;
  user: string;
  password: string;
}

const Login = ({ setDataLoading, dataLoading }: Props) => {
  const [cambio, setCambio] = useState(true);
  // const { infoWorkPlan } = useContext(dataWorkPlanContext);
  // const { getItemContext } = infoWorkPlan;

  // const dataUser = getItemContext('user');

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<dataFormLogin> = (data) => {
    const { firstName, user, password } = data;
    if (firstName === 'BIO' && user === 'BIO' && password === 'BIO') {
      setDataLoading(true);
    }
  };

  return (
    <Center>
      <Box w="100%" safeArea p="2" maxW="290" py="8">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}>
          Bienvenido
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: 'warmGray.200',
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs">
          Por favor ingrese con su cuenta
        </Heading>
        <VStack>
          <FormControl isRequired>
            <Stack mx="4">
              <FormControl
                isRequired
                // isInvalid={"firstName" in errors}
              >
                <FormControl.Label>First Name</FormControl.Label>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      _light={{
                        bg: 'coolGray.100',
                        _focus: {
                          bg: 'coolGray.200:alpha.70',
                        },
                      }}
                      _dark={{
                        bg: 'coolGray.800',
                        _focus: {
                          bg: 'coolGray.900:alpha.70',
                        },
                      }}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="firstName"
                  rules={{ required: 'Field is required', minLength: 3 }}
                  defaultValue="BIO"
                />
                {/* <FormControl.ErrorMessage>
                  {errors.firstName?.message}
                </FormControl.ErrorMessage> */}
              </FormControl>
            </Stack>
            <Stack mx="4">
              <FormControl.Label>Usuario</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    _light={{
                      bg: 'coolGray.100',
                      _focus: {
                        bg: 'coolGray.200:alpha.70',
                      },
                    }}
                    _dark={{
                      bg: 'coolGray.800',
                      _focus: {
                        bg: 'coolGray.900:alpha.70',
                      },
                    }}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
                name="user"
                rules={{ required: 'Field is required', minLength: 3 }}
                defaultValue="BIO"
              />

              <FormControl.HelperText>name</FormControl.HelperText>
              <FormControl.ErrorMessage>name</FormControl.ErrorMessage>
            </Stack>
            <Stack mx="4">
              <FormControl.Label>Password</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    _light={{
                      bg: 'coolGray.100',
                      _focus: {
                        bg: 'coolGray.200:alpha.70',
                      },
                    }}
                    _dark={{
                      bg: 'coolGray.800',
                      _focus: {
                        bg: 'coolGray.900:alpha.70',
                      },
                    }}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    shadow={2}
                    type="password"
                    defaultValue=""
                  />
                )}
                name="password"
                rules={{ required: 'Field is required', minLength: 3 }}
                defaultValue="BIO"
              />
              {/* <FormControl.HelperText>Password</FormControl.HelperText> */}
              {/* <FormControl.ErrorMessage>Password</FormControl.ErrorMessage> */}
            </Stack>
          </FormControl>
          <Button
            _light={{
              bg: 'info.900',
              marginVertical: 20,
            }}
            _dark={{
              bg: 'info.600',
            }}
            onPress={handleSubmit(onSubmit)}>
            Enviar
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default Login;
