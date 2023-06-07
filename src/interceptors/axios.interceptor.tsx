import axios from 'axios';

import { URL_BACKEND } from '@env';

console.log(URL_BACKEND);

axios.defaults.baseURL = URL_BACKEND;

export const AxiosInterceptor = () => {
  axios.interceptors.response.use(
    (response) => response,

    (err) => {
      console.log('error', err);

      const {
        response: {
          data: { error },
        },
      } = err;

      // if (err.response.status === 401) redirect();

      // if (err.response.status === 504)
      //   toast.error(GetValidationErrorMessage("GATEWAY_TIMEOUT"));
      // else if (error) toast.error(GetValidationErrorMessage(error));

      return Promise.reject(err);
    },
  );
};
