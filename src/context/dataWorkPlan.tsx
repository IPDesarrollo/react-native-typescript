import React, { createContext, useState } from 'react';
import { getWorkPlan, getWorkPlanDetails } from '@services/index';
import { ResponseWorkPlan, ResponseWorkPlanDetails } from '@interfaces/index';
import { AsyncStorage } from 'react-native';

interface dataWorkPlanType {
  activeCard: boolean;
  infoWorkPlan: ResponseWorkPlan;
  infoWorkPlanDetails: ResponseWorkPlanDetails;
  getData: (workPlanNumber: string) => true | undefined;
}

interface props {
  children: JSX.Element | JSX.Element[];
}

const dataWorkPlanContext = createContext<dataWorkPlanType>({} as dataWorkPlanType);

const DataWorkPlan = ({ children }: props) => {
  const [active, setActive] = useState<boolean>(false);
  const [infoWorkPlan, setInfoWorkPlan] = useState<ResponseWorkPlan>({} as ResponseWorkPlan);
  const [infoWorkPlanDetails, setInfoWorkPlanDetails] = useState<ResponseWorkPlanDetails>(
    {} as ResponseWorkPlanDetails,
  );

  const createNewItemContext = (key, value) => {
    appStorageGlobal.set(`${key}`, `${value}`);
  };

  // const getItemContext = (key) => {
  //   const userObject = JSON.parse(appStorageGlobal.getString(`${key}`));
  //   return userObject;
  // };

  createNewItemContext('username', 'John');

  const getData = async (workPlanNumber: string) => {
    const dataGetWorkPlan = await getWorkPlan(workPlanNumber);
    setInfoWorkPlan(dataGetWorkPlan);
    const dataDetails = await getWorkPlanDetails(`${dataGetWorkPlan.work_plan_number}`);
    if (dataDetails) {
      setInfoWorkPlanDetails(dataDetails);
      setActive(true);
      return true;
    }
  };

  return (
    <dataWorkPlanContext.Provider
      value={{
        activeCard: active,
        infoWorkPlan,
        infoWorkPlanDetails,
        getData,
        // getItemContext,
      }}>
      {children}
    </dataWorkPlanContext.Provider>
  );
};

export { dataWorkPlanContext, DataWorkPlan };

// import React, { createContext, useState } from 'react';
// import { getWorkPlan, getWorkPlanDetails } from '@services/index';
// import { ResponseWorkPlan, ResponseWorkPlanDetails } from '@interfaces/index';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// interface dataWorkPlanType {
//   activeCard: boolean;
//   infoWorkPlan: ResponseWorkPlan;
//   infoWorkPlanDetails: ResponseWorkPlanDetails;
//   getData: (workPlanNumber: string) => true | undefined;
// }

// interface props {
//   children: JSX.Element | JSX.Element[];
// }

// const dataWorkPlanContext = createContext<dataWorkPlanType>({} as dataWorkPlanType);

// const [globalData, setGlobal, Data] = useState();

// const storeData = async (data) => {
//   try {
//     const jsonValue = JSON.stringify(data);
//     await AsyncStorage.setItem('@storage_Key', data);
//   } catch (e) {
//     console.log(e);
//   }
// };

// const DataWorkPlan = ({ children }: props) => {
//   const [active, setActive] = useState<boolean>(false);
//   const [infoWorkPlan, setInfoWorkPlan] = useState<ResponseWorkPlan>({} as ResponseWorkPlan);
//   const [infoWorkPlanDetails, setInfoWorkPlanDetails] = useState<ResponseWorkPlanDetails>(
//     {} as ResponseWorkPlanDetails,
//   );

//   const getData = async (workPlanNumber: string) => {
//     const dataGetWorkPlan = await getWorkPlan(workPlanNumber);
//     setInfoWorkPlan(dataGetWorkPlan);
//     const dataDetails = await getWorkPlanDetails(`${dataGetWorkPlan.work_plan_number}`);
//     if (dataDetails) {
//       setInfoWorkPlanDetails(dataDetails);
//       setActive(true);
//       return true;
//     }
//   };

//   return (
//     <dataWorkPlanContext.Provider
//       value={{
//         activeCard: active,
//         infoWorkPlan,
//         infoWorkPlanDetails,
//         getData,
//       }}>
//       {children}
//     </dataWorkPlanContext.Provider>
//   );
// };

// export { dataWorkPlanContext, DataWorkPlan };
