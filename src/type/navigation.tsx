import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  ImportWorkPlan: undefined;
  Settings: undefined;
  DriverCheckup: undefined;
  CheckList: undefined;
  Login: undefined;
};

type StackNavigation = StackNavigationProp<RootStackParamList>;

type StackNavigationProps = {
  navigation: StackNavigation;
};

export { StackNavigationProps };
