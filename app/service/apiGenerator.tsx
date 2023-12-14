
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const BASE_URL = "https://sk-retail-dev-api.azurewebsites.net/api/v1"

const getAuthToken = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('authToken');
    if (jsonValue) {
      return jsonValue;
    }
    return null;
  } catch (error) {
    console.error('Error fetching token:', error);
    return null;
  }
};
const apiResponseGenerator = async ({method, url, body}: any) => {
    const authToken = await getAuthToken();
    const axiosConfig = {
      method: method ? method.toLowerCase() : 'get',
      url: `${BASE_URL}${url}`,
      data: body,
      headers: {
        Authorization: authToken ? `Bearer ${authToken}` : undefined,
      },
    };
    try {
      const response = await axios(axiosConfig);
      return response.data;
    }catch (error: any) {
      let errorMessage = '';
  
      if (error?.response?.data?.meta?.message) {
        errorMessage = error.response.data.meta.message;
      }
    
      if (!errorMessage) {
        errorMessage = 'Unknown error occurred';
      }
    
      throw new Error(errorMessage);
    }
  };
  
  export default apiResponseGenerator;
  
