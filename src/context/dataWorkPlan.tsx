import React, { createContext, useState, useEffect } from 'react';
import { getWorkPlan, getWorkPlanDetails } from '@services/index';
import { ResponseWorkPlan, ResponseWorkPlanDetails } from '@interfaces/index';
// import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface dataWorkPlanType {
  activeCard: boolean;
  infoWorkPlan: ResponseWorkPlan;
  infoWorkPlanDetails: ResponseWorkPlanDetails;
  getData: (workPlanNumber: string) => Promise<true | undefined>;
  createNewItemContext: ({ key, value }: propsCreateItemStorage) => Promise<void>;
  getItemContext: ({ key }: propsGetItemStorage) => Promise<string | object>;
  UpdateItemContext: ({ key, value }: propsUpdateItemStorage) => Promise<void>;
  DeleteItemContext: ({ key }: propsDeleteItemStorage) => Promise<void>;
}

interface props {
  children: JSX.Element | JSX.Element[];
}

const dataWorkPlanContext = createContext<dataWorkPlanType>({} as dataWorkPlanType);

type propsCreateItemStorage = {
  key: string;
  value: string | object;
};

interface propsUpdateItemStorage {
  key: string;
  value: string | object;
}

interface propsGetItemStorage {
  key: string;
}

interface propsDeleteItemStorage {
  key: string;
}
const DataWorkPlan = ({ children }: props) => {
  const [active, setActive] = useState<boolean>(false);
  const [infoWorkPlan, setInfoWorkPlan] = useState<ResponseWorkPlan>({} as ResponseWorkPlan);
  const [infoWorkPlanDetails, setInfoWorkPlanDetails] = useState<ResponseWorkPlanDetails>(
    {} as ResponseWorkPlanDetails,
  );

  useEffect(() => {
    const returnData = async () => {
      const dataInfoWorkPlan = await getItemContext({ key: 'infoWorkPlan' });
      setInfoWorkPlan(dataInfoWorkPlan);
      if (dataInfoWorkPlan) {
        // const dataInfoWorkPlan = await getItemContext({ key: 'infoWorkPlan' });
        // setInfoWorkPlan(dataInfoWorkPlan);
        setActive(true);
      }
    };
    returnData();
  }, []);

  const createNewItemContext = async ({ key, value }: propsCreateItemStorage) => {
    console.log(value);
    try {
      if (typeof value === 'object')
        return await AsyncStorage.setItem(`${key}`, JSON.stringify(value));
      await AsyncStorage.setItem(`${key}`, value);
    } catch (e) {
      console.log(e);
    }
  };

  const getItemContext = async ({ key }: propsGetItemStorage) => {
    try {
      const jsonValue = await AsyncStorage.getItem(`${key}`);

      if (jsonValue != null) {
        const value = typeof jsonValue === 'object' ? JSON.parse(jsonValue) : jsonValue;
        return value;
      }
      return null;
      // const value = (await jsonValue) != null ? jsonValue : null;
    } catch (e) {
      console.log(e);
    }
  };

  const UpdateItemContext = async ({ key, value }: propsUpdateItemStorage) => {
    try {
      if (typeof value === 'object') return AsyncStorage.mergeItem(`${key}`, JSON.stringify(value));
      await AsyncStorage.mergeItem(`${key}`, value);
    } catch (e) {
      console.log(e);
    }
  };
  const DeleteItemContext = async ({ key }: propsDeleteItemStorage) => {
    try {
      await AsyncStorage.removeItem(`${key}`);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async (workPlanNumber: string) => {
    const dataGetWorkPlan = await getWorkPlan(workPlanNumber);
    setInfoWorkPlan(dataGetWorkPlan);
    createNewItemContext({ key: 'infoWorkPlan', value: dataGetWorkPlan });
    const dataDetails = await getWorkPlanDetails(`${dataGetWorkPlan.work_plan_number}`);
    if (dataDetails) {
      setInfoWorkPlanDetails(dataDetails);
      setActive(true);
      // createNewItemContext({ key: 'infoWorkPlanDetails', value: dataDetails });
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
        getItemContext,
        createNewItemContext,
        UpdateItemContext,
        DeleteItemContext,
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
