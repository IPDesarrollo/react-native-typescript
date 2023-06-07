import axios from 'axios';

import { ResponseWorkPlan } from '../interfaces/';

const getWorkPlan = async (workPlanNumber: string) => {
  const { data } = await axios.get<ResponseWorkPlan>(`work-plans/mobile/${workPlanNumber}`);
  return data;
};

export { getWorkPlan };
