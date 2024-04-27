import axios from './axios-instance';

const Post = async (endpoint: string) => {
  try {
    return axios.post(endpoint);
  } catch (err: any) {
    throw err.response;
  }
};
const Get = async (endpoint: string) => {
  try {
    return axios.get(`${endpoint}`);
  } catch (err: any) {
    throw err.response;
  }
};

export default {
  Post,
  Get,
};
