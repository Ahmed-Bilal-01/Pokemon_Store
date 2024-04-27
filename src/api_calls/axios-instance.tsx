import axios, {AxiosResponse} from 'axios';
import {useNavigation} from '@react-navigation/native';
import {useToast} from 'react-native-toast-notifications';
import {useEffect} from 'react';
//@ts-ignore
import {APP_BASE_URL} from '@env';

const instance = axios.create({
  baseURL: `${APP_BASE_URL}`,
});

const AxiosInterceptor = ({children}: any) => {
  const navigation = useNavigation();
  const toast = useToast();
  useEffect(() => {
    const responseSuccessHandler = (response: AxiosResponse) => {
      if (response.status === 200) {
        console.log('success');
      }
      return response;
    };
    axios.interceptors.request.use(
      function (successfulReq) {
        return successfulReq;
      },
      function (error) {
        Promise.reject(error);
      },
    );
    const responseErrorHandler = (error: any) => {
      console.log('error');

      return Promise.reject(error.response);
    };
    const interceptor = instance.interceptors.response.use(
      response => responseSuccessHandler(response),
      error => responseErrorHandler(error),
    );

    return () => instance.interceptors.response.eject(interceptor);
  }, [navigation, toast]);

  return children;
};
export default instance;
export {AxiosInterceptor};
