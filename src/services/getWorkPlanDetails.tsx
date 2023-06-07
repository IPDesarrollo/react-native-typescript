import axios from 'axios';
import { ResponseWorkPlanDetails } from '../interfaces/WorkPlanDetails';

const getWorkPlanDetails = async (workPlanId: string) => {
  const { data } = await axios.get<ResponseWorkPlanDetails>(
    `work-plan-details/mobile/${workPlanId}`,
  );
  return data;
};

export { getWorkPlanDetails };
